import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function SocialIcons() {
    return (
        <div className="icons-container">
            <a href="https://linkedin.com/in/jvandervoo" rel="noopener noreferrer" target="_blank">
                <FaLinkedin />
            </a>
            <a href="https://github.com/jvandervoo" rel="noopener noreferrer" target="_blank">
                <FaGithub />
            </a>
        </div>
    );
}
