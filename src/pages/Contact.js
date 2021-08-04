import React from 'react'
import {Link} from 'react-router-dom';
import SimpleMap from './Map';


const Contact=()=> {
    return (
        <div className="home page page-template page-template-template-portfolio page-template-template-portfolio-php">
                 

                 <div id="page">
  <div className="container">
    <header id="masthead" className="site-header">
      <div className="site-branding">
        <h1 className="site-title"><Link to='/' >Moschino</Link></h1>
        <h2 className="site-description">Minimalist Portfolio HTML Template</h2>
      </div>
      <nav id="site-navigation" className="main-navigation">
        <div className='dropdown'> 
        <button className='dropbtn menu-toggle'>Menu</button>
        <div className='dropdown-content'>
        <li><Link to='/' >Ana səhifə</Link></li>
	
    <li><Link to="/shop">Mağaza</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to='/contact'>Əlaqə</Link></li>
        </div>
        </div>
       
        <div className="menu-menu-1-container">
        <ul id="menu-menu-1" className="menu">
			<li><Link to='/' >Ana səhifə</Link></li>
		
				<li><Link to="/shop">Mağaza</Link></li>
				<li><Link to="/blog">Blog</Link></li>
				
				
			
				<li><Link to='/contact'>Əlaqə</Link></li>
			</ul>
        </div>
      </nav>
    </header>
    {/* #masthead */}
    <div id="content" className="site-content">
      <div id="primary" className="content-area column full">
        <main id="main" className="site-main">
          <article id="post-39" className="post-39 page type-page status-publish hentry">
            <header className="entry-header">
              <h1 className="entry-title">Xəritə</h1>
            </header>
            {/* .entry-header */}
            <div className="entry-content">
              {/* BEGIN MAP */}
             <SimpleMap />
              {/* END MAP */}
              <div className="wpcmsdev-columns">
                <div className="column column-width-one-half">
                  <h4 className="elaqe">BİZİMLƏ ƏLAQƏ</h4>						
                  <form className="wpcf7" method="post" action="contact.php" id="contactform">
                    <div className="form">
                      <p><input type="text" name="name" placeholder="Name *" /></p>
                      <p><input type="text" name="email" placeholder="E-mail Address *" /></p>
                      <p><textarea name="comment" rows={3} placeholder="Message *" defaultValue={""} /></p>
                      <input type="submit" id="submit" className="clearfix btn" defaultValue="Send" />
                    </div>
                  </form>
                  <div className="done">								
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="column column-width-one-half">
                  <h2>Əlaqə nömrəsi: 051-346-66-37</h2>
                 <a className='sosial'  href="https://www.instagram.com/"><i class="fab fa-instagram fa-6x " ></i></a>
                 <a className='sosial'  href="https://www.facebook.com/"><i class="fab fa-facebook fa-6x"></i></a>
                <a  className='sosial' href="https://twitter.com/home"><i class="fab fa-twitter fa-6x"></i></a>
               
                </div>
              </div>
            </div>
            {/* .entry-content */}
          </article>
        </main>
        {/* #main */}
      </div>
      {/* #primary */}
    </div>
    {/* #content */}
  </div>
  {/* .container */}
  <footer id="colophon" className="site-footer">
    <div className="container">
      <div className="site-info">
        <h1 style={{fontFamily: '"Herr Von Muellerhoff"', color: '#ccc', fontWeight: 300, textAlign: 'center', marginBottom: 0, marginTop: 0, lineHeight: '1.4', fontSize: 46}}>Moschino</h1>
        <a target="blank" href="https://www.wowthemes.net/">© Moschino - Free HTML Template by WowThemes.net</a>
      </div>
    </div>
  </footer>
  <a href="#top" className="smoothup" title="Back to top"><i className="fas fa-arrow-up fa-3x "></i></a>
</div>


        </div>
    )
}

export default Contact
