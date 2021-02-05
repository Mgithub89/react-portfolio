import React from 'react'

export default function Footer() {
    return (
        <div style={{
            boxShadow: '0px -10px teal',
            position: 'fixed',
            bottom: '0',
            width: '100%'

        }}>
            <footer class="bg-dark text-muted text-center py-2">
                copyright &copy 2021 Metages
        <div class="icons">

                    <a href="https://www.facebook.com/metages.worku" target="_blank">
                        <i class="fab fa-facebook ml-3 "></i>
                    </a>

                    <a href="https://www.linkedin.com/in/metages-worku-6a962a1b5/" target="_blank">
                        <i class="fab fa-linkedin ml-3 "></i>
                    </a>

                    <a href="https://github.com/Mgithub89" target="_blank">
                        <i class="fab fa-github ml-3"></i>
                    </a>
                </div>
            </footer>
        </div>
    )
}
