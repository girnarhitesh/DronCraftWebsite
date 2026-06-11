import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import "../Button/Button.css";
import "./BlogsPage.css";
import BlogImage from "./BlogImage";
import { blogsHeader, blogs, blogsPageMeta, getBlogPath } from "./blogsData";
import { hasBlogPost } from "./blogPosts";
import { applyPageMeta, resetPageMeta } from "../../utils/pageMeta";
import { preloadImages } from "../../utils/preloadImages";

const SITE_ORIGIN = "https://www.dronecraft.co.in";

const BlogsPage = () => {
    useEffect(() => {
        applyPageMeta({
            title: blogsPageMeta.metaTitle,
            description: blogsPageMeta.metaDescription,
            keywords: blogsPageMeta.metaKeywords,
            canonical: `${SITE_ORIGIN}/blogs`,
            ogTitle: blogsPageMeta.metaTitle,
            ogDescription: blogsPageMeta.metaDescription,
            ogUrl: `${SITE_ORIGIN}/blogs`,
            ogType: "website",
        });

        preloadImages(blogs.map((blog) => blog.image));

        return resetPageMeta;
    }, []);

    return (
        <main className="BlogsPage">
            <div className="BlogsPageInner MaxWidthContainer MarginAuto">
                <header className="BlogsHeader">
                    <p className="BlogsEyebrow">{blogsHeader.eyebrow}</p>
                    <h1 className="BlogsTitle">{blogsHeader.title}</h1>
                    <p className="BlogsSubtitle">{blogsHeader.subtitle}</p>
                </header>

                <div className="BlogsGrid">
                    {blogs.map((blog, index) => {
                        const isPublished = blog.slug && hasBlogPost(blog.slug);

                        return (
                            <article key={blog.id} className="BlogCard">
                                <div className="BlogCardImageWrap">
                                    <BlogImage
                                        className="BlogCardImage"
                                        src={blog.image}
                                        alt={blog.title}
                                        eager={index < 2}
                                        priority={index === 0}
                                    />
                                </div>
                                <div className="BlogCardContent">
                                    <h2 className="BlogCardTitle">{blog.title}</h2>
                                    {isPublished ? (
                                        <Link
                                            to={getBlogPath(blog.slug)}
                                            className="Btn Btn--outlineOrange BlogCardReadMore"
                                        >
                                            <span className="BtnText">Read More</span>
                                            <span className="BtnIconCircle" aria-hidden="true">
                                                <IoArrowForward size={14} />
                                            </span>
                                        </Link>
                                    ) : (
                                        <span
                                            className="Btn Btn--outlineOrange BlogCardReadMore BlogCardReadMore--disabled"
                                            aria-disabled="true"
                                        >
                                            <span className="BtnText">Read More</span>
                                            <span className="BtnIconCircle" aria-hidden="true">
                                                <IoArrowForward size={14} />
                                            </span>
                                        </span>
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default BlogsPage;
