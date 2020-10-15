import React from 'react'

const Footer = () => {
    return (
        <footer id="page-footer" className="footer">
            {/* <!-- Font Awesome -->
            <!-- fab => 5.14.0; fa => 4.7.0 --> */}
            <a href="http://github.com/aliaksei-chareshneu/" target="_blank" rel="noopener noreferrer" title="Github">
                <i className="fab fa-github fa-2x "></i>
            </a>
            <a href="https://twitter.com/AChareshneu" target="_blank" rel="noopener noreferrer" title="Twitter">
                <i className="fab fa-twitter fa-2x "></i>
            </a>
            <a href="https://www.facebook.com/alexey.chereshnev.3" target="_blank" rel="noopener noreferrer" title="Facebook">
                <i className="fab fa-facebook fa-2x "></i>
            </a>
            <a href="https://vk.com/id48672698" target="_blank" rel="noopener noreferrer" title="VKontakte">
                <i className="fab fa-vk fa-2x "></i>
            </a>
            <a href="mailto:chareshneu.tech@gmail.com" title="Email">
                <i className="fas fa-envelope fa-2x "></i>
            </a>
        </footer>
    )
}

export default Footer