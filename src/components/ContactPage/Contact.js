import React from 'react'
import "./style.css";

export default function Contact() {
    return (
        <div style={{

            backgroundImage: "url(https://i.pinimg.com/originals/b7/2e/9e/b72e9e8f20e6b9199ed83f393e750c0a.jpg)",
            backgroundSize: "cover",
            margin: "0 0 100px"


        }}>
            <section class="container py-5 mt-5" id="contact">
                <header class="row mx-2">
                    <div class="col-xs-10 col-md-8 bg-white">
                        <br />
                        <h1 class="text-info font-weight-bold">Contact</h1>
                        <hr />
                    </div>
                </header>
                <div class=" row mx-2">
                    <div class="col-xs-10 col-md-8 bg-white">
                        <form action="mailto:metages09@gmail.com" method="post">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Name" required />
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" id="email" placeholder="Email" required />
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea rows="4" class="form-control" id="message" placeholder="Message" required></textarea>
                            </div>
                            <button type="button" class="btn btn-info btn-lg mb-4 rounded-0">Submit</button>
                        </form>
                    </div>
                    <div class="col-md-4">
                        <h1>Metages Worku</h1>
                        <hr />
                        <h3 class="mt-3">Email:</h3>
                        <a href="mailto:metages09@gmail.com">metages09@gmail.com</a>
                        <h3>Linkedin:</h3>
                        <a
                            href="https://www.linkedin.com/in/metages-worku-6a962a1b5/">https://www.linkedin.com/in/metages-worku</a>
                        <h3>Github:</h3>
                        <a href="https://github.com/Mgithub89">https://github.com/Mgithub89</a>
                        <h3>Phone:</h3>
                        <a href="tel:2064121070">(206) 412-1070</a>
                    </div>
                </div>
            </section>

        </div>
    )
}
