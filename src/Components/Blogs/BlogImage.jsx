import React, { useEffect, useRef, useState } from "react";
import "./BlogImage.css";

const BlogImage = ({ src, alt, className = "", eager = false, priority = false }) => {
    const imgRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
    }, [src]);

    useEffect(() => {
        const img = imgRef.current;
        if (img?.complete && img.naturalWidth > 0) {
            setIsLoaded(true);
        }
    }, [src]);

    return (
        <img
            ref={imgRef}
            src={src}
            alt={alt}
            className={`BlogImage ${className} ${isLoaded ? "BlogImage--loaded" : ""}`.trim()}
            loading={eager ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            onLoad={() => setIsLoaded(true)}
        />
    );
};

export default BlogImage;
