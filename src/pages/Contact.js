const Contact = () => {
    return (
      <div className="manifesto-container">
        <p><em>Reach out into the void. Maybe it answers. Perhaps it doesn't.</em></p>
        <form id="contact-form" action="mailto:systemerrorexe@proton.me" method="post" enctype="text/plain">
          <div class="form-group">
            <label for="name">Your Name:</label>
            <input type="text" id="name" name="name" required></input>
          </div>
          
          <div class="form-group">
            <label for="email">Your Email:</label>
            <input type="email" id="email" name="email" required></input>
          </div>
          
          <div class="form-group">
            <label for="message">Your Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          
          <div class="button-container">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>

    )
  };
  
  export default Contact;
  