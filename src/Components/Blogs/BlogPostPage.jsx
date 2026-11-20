import React, { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { getBlogPost } from "./blogPosts";
import { BlogRichText } from "./BlogRichText";
import BlogImage from "./BlogImage";
import { preloadImages } from "../../utils/preloadImages";
import "./BlogPostPage.css";

function getPlainText(content) {
    if (typeof content === "string") return content;
    if (Array.isArray(content)) return content.map((part) => part.text).join("");
    return "";
}

function BlogSection({ section }) {
    return (
        <section className="BlogPostSection">
            {section.heading && (
                <h2 className="BlogPostSectionHeading">
                    <BlogRichText content={section.heading} />
                </h2>
            )}
            {section.paragraphs?.map((paragraph, index) => (
                <p key={`p-${index}`} className="BlogPostParagraph">
                    <BlogRichText content={paragraph} />
                </p>
            ))}
            {section.list && (
                <ul className="BlogPostList">
                    {section.list.map((item, index) => (
                        <li key={`${getPlainText(item)}-${index}`}>
                            <BlogRichText content={item} />
                        </li>
                    ))}
                </ul>
            )}
            {section.table && (
                <div className="BlogPostTableWrap">
                    <table className="BlogPostTable">
                        <thead>
                            <tr>
                                {section.table.headers.map((header) => (
                                    <th key={header} scope="col">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {section.table.rows.map((row) => (
                                <tr key={row.join("-")}>
                                    {row.map((cell) => (
                                        <td key={cell}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {section.paragraphsAfter?.map((paragraph, index) => (
                <p key={`pa-${index}`} className="BlogPostParagraph">
                    <BlogRichText content={paragraph} />
                </p>
            ))}
            {section.links?.map((link) => (
                <Link key={link.label} to={link.href} className="BlogPostLink">
                    {link.label}
                </Link>
            ))}
        </section>
    );
}

const BlogPostPage = () => {
    const { slug } = useParams();
    const post = getBlogPost(slug);

    useEffect(() => {
        if (!post) return undefined;

        preloadImages([post.image]);
        return undefined;
    }, [post]);

    if (!post) {
        return <Navigate to="/blogs" replace />;
    }

    return (
        <main className="BlogPostPage">
            <div className="BlogPostInner MaxWidthContainer MarginAuto">
                <Link to="/blogs" className="BlogPostBack">
                    <IoArrowBack size={18} aria-hidden="true" />
                    Back to Blog
                </Link>

                <article className="BlogPostArticle">
                    <header className="BlogPostHeader">
                        <p className="BlogPostEyebrow">Blog</p>
                        <h1 className="BlogPostTitle">
                            <BlogRichText content={post.title} />
                        </h1>
                    </header>

                    <div className="BlogPostHero">
                        <BlogImage
                            className="BlogPostHeroImage"
                            src={post.image}
                            alt={getPlainText(post.title)}
                            eager
                            priority
                        />
                    </div>

                    <div className="BlogPostBody">
                        {post.sections.map((section, index) => (
                            <BlogSection key={`${section.heading ?? "intro"}-${index}`} section={section} />
                        ))}
                    </div>
                </article>
            </div>
        </main>
    );
};

export default BlogPostPage;
