import React from 'react';
import Kilt from './images/pipe-musicians-kilt-scotland.jpg'
import Trach from './images/traditional-dress-of-germany.jpg'
import Bamileke from './images/traditional-dress-of-germany.jpg'
import Jeoson from './images/national-joseon-clothes.jpg'
import Rio from './images/rio carnaval dressing.jpg';
import Qarabaq from './images/Cebrayilzade.jpg'
import	 Xudayar from './images/xudayar.jpg'
import	Topcu from './images/topcu.jpg'
import ReadMoreReact ,{idealLength} from 'read-more-react';

 import { Link } from 'react-router-dom';

const Blog=()=> {
    return (
        <div>
            
            <div id="page">
	<div className="container">
		<header id="masthead" className="site-header">
		<div className="site-branding">
			<h1 className="site-title"><Link to='/' rel="home">Moschino</Link></h1>
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
		{/* <!-- #masthead --> */}
		<div id="content" className="site-content">
			<div id="primary" className="content-area column two-thirds">
				<main id="main" className="site-main" role="main">
				<div className="grid bloggrid">
				
					<article>
					<header className="entry-header">
					<h1 className="entry-title"><a href="#" rel="bookmark"> Kilt - Şotlandiya</a></h1>
					<div className="entry-meta">
						<span className="posted-on"><time className="entry-date published">Aprel 12, 2016</time></span>						
					
					</div>
					<div className="entry-thumbnail">						
						<img src={Kilt} alt=""/>
					</div>
					</header>
					<div className="entry-summary">
						<p>
						<ReadMoreReact text={"Hər kəsin tanış olduğu bir ənənəvi geyim ilə başlamaq istədik. Bildiyimiz kimi Şotlandiya kişilərin də ətəklər (kiltlər) geyindikləri ölkədir. Əsasən diz uzunluğunda və arxadan qatları olan bu ətək növləri Şotlandiyanın dağlarında yaşayan gənclər və kişilər tərəfindən geyinilirdi. İlk dəfə 16-cı əsrdə böyük ölçüdə geyinilirdi, sonradan isə müasir və daha kiçik forması 18-ci əsrdə geyinilməyə başlanıldı. 1746-cı ildə bir müddət II Kral Corc tərəfindən qadağan olunsa da, 35 il sonra yenidən bu qayda ləğv edildikdən sonra geyinilməyə başlanıldı. 19-cu əsrdə isə artıq tam olaraq Şotlandiya mədəniyyəti ilə uyğunlaşmışdı. Yun parçadan hazırlanan bu ətəklər tez-tez xüsusi rəsmi mərasimlərdə və idman tədbirlərində geyinilir."}
                
                ideal={idealLength}
               
                readMoreText="Daha ətraflı"/>
							
						</p>
					</div>
					
					</article>
					
					<article>
					<header className="entry-header">
					<h1 className="entry-title"><a href="#" rel="bookmark">Trach - Almaniya və Avstriya</a></h1>
					<div className="entry-meta">
						<span className="posted-on"><time className="entry-date published">Aprel 11, 2016</time></span>						
						
					</div>
					<div className="entry-thumbnail">	
										
						<img src={Trach} alt=""/>
					</div>
					</header>
					<div className="entry-summary">
						<p>
						<ReadMoreReact text={"Bu kişilər üçün xüsusi tutacaqları olan şalvarlar (lederhosen adlanır) və qadınlar üçün geniş ətəkli və sıx kəmərli geyimlərdir (dirndls adlanır). Daha çox cənubi Almaniyada (Bavariya) və Avstriyada geyilən bir geyimdir. Geyimin üslubu hər yerə və dövrə uyğun olaraq fərqlənir. Məsələn, pon-ponlu papaqlar və dar dəri şalvarlar bu fərqliliyə nümunədir. Daha çox Pride festivalında geyinilən bu dar dəri şalvarlar Bavariya geyiminə son dərəcə müasirlik qatır. Almanların məşhur pivə içmə festivalı olan Oktoberfest festivalında da bu geyimləri geyinmək həm kişilər, həm də qadınlar üçün bir adət halını almışdır. Hətta qadınlarda ətəyin üstündən geyilən önlüyün necə bağlanması onların evli və ya subay olması haqqında da məlumat verir."}
                
                ideal={idealLength}
               
                readMoreText="Daha ətraflı"
				/>
							 
 
						</p>
					</div>
					
					</article>
					
	
					<article>
					<header className="entry-header">
					<h1 className="entry-title"><a href="#" rel="bookmark">Bamileke Fil Maskası - Kamerun</a></h1>
					<div className="entry-meta">
						<span className="posted-on"><time className="entry-date published">Aprel 10, 2016</time></span>						
						
					</div>
					<div className="entry-thumbnail">						
						<img src={Bamileke} alt=""/>
					</div>
					</header>
					<div className="entry-summary">
						<p>
						<ReadMoreReact text={'Avropanın bir neçə geyimindən danışdıqdan sonra diqqətimizi indi də Afrikaya yönəltmək istərdim. Afrika ümumi olaraq çox qəribə geyim adət-ənənələri ilə boldur. Bol-bol aksesuarlar, maskalar, rəngarəng geyimlər daha çox keçmiş zamanlarda yaşayan qəbilələrin geyimlərini xatırladan stillər buraya xas olan özəlliklərdəndir. Həqiqətən də hər birindən ayrılıqda uzun-uzun danışmaq mümkündür. Lakin mənim diqqətimi həm ilk baxışda vahiməli görünən, həm də incəliklərilə özünə heyran qoyan Bamileke Fil Maskaları çəkdi. Kameruna aid olan bu maskalar Bamileke kralına xüsusi olaraq xidmətlər göstərən döyüşçülərə verilirdi və onlar "Fil Maskası" cəmiyyətinə daxil olmaq hüququ qazanırdılar. Kralın cənazəsində və ildə 2 dəfə keçirilən yığıncaqlarda rəqs edərkən minlərlə rəngarəng və müxtəlif formalı muncuqlardan hazırlanmış bu maskaları taxırdılar. Burada xüsusən kralın vurğulanmasının da bir səbəbi var. Maskalar daha çox kralın var-dövlətini, gücünü və imtiyazını göstərirdi. 20-ci əsrin ortalarına xas bu geyimin adında "Fil" sözünün olması da Kamerun krallığında filin gücün simvolu kimi xarakterizə edilməsindən gəlir.'}
                
                ideal={idealLength}
               
                readMoreText="Daha ətraflı"/>
						
						</p>
					</div>
					
					</article>
					
					<article>
					<header className="entry-header">
					<h1 className="entry-title"><a href="#" rel="bookmark">Joseon-oth və ya Hanbok</a></h1>
					<div className="entry-meta">
						<span className="posted-on"><time className="entry-date published">Aprel 9, 2016</time></span>						
						
					</div>
					<div className="entry-thumbnail">						
						<img src={Jeoson} alt=""/>
					</div>
					</header>
					<div className="entry-summary">
						<p>
						<ReadMoreReact text={'Ənənəvi Koreya geyimi olan bu geyimlərdə əsasən canlı rənglərdən istifadə olunur. Sadə xətləri vardır və cibsiz tikilişi ilə daha rahat və çox asanlıqla hərəkət etməyə şərait yaradırlar. Bu geyimin dizaynına ilham verən monqollar olmuşdur. Festivallar və şənliklər zamanı geyilən formal və ya yarı-formal geyim növü kimi sayılır. "Hanbok" sözü hərfi mənada "Koreya geyimləri" mənasını verir, lakin Joseon dövrünə aid olduğu üçün də Şimali Koreyada həmçinin Joseon da adlanır. '}
                
                ideal={idealLength}
               
                readMoreText="Daha ətraflı"/>
						
						</p>
					</div>
					
					</article>	
				
				
					<article>
					<header className="entry-header">
					<h1 className="entry-title"><a href="#" rel="bookmark">Karnaval geyimləri - Rio-de-Janeyro</a></h1>
					<div className="entry-meta">
						<span className="posted-on"><time className="entry-date published">Aprel 6, 2016</time></span>						
						
					</div>
					<div className="entry-thumbnail">						
						<img src={Rio} alt=""/>
					</div>
					</header>
					<div className="entry-summary">
						<p className='readMore'>
						<ReadMoreReact text={' Şimal yarımkürəsindən danışdıqdan sonra siyahımızı bir də Cənub yarımkürəsinə toxunaraq bitirməliydik. Öz rəngarəng festivalları və geyim tərzləri ilə məşhur olan Cənubi Amerika bu siyahıda mütləq şəkildə olmalıydı deyə düşünürəm. Braziliyanın karnavalları və burada geyinilən göz oxşayan, hər bir detalı ustalıqla işlənən geyimləri artıq hər kəsə məlumdur. İlk dəfə 19-cu əsrin sonlarında şənliklər zamanı geyilərkən təqdim olunmuşdu. Əsasən rəqs karnavallarında istifadə olunduğundan daha rahat və əlverişli hala gətirmək üçün daha az materialdan istifadə edərək daha yüngül geyimlər hazırlanmağa başlandı. Bu geyimlərdə mütləq şəkildə saç aksesuarında lələklər olmalı və qanadlar geyinilməlidir. Həm rəngarəng olub, həm də ahəngi saxlayaraq zövqlü görünməyi bacaran bu geyimlərdə daha çox tovuz quşu motivlərinə üstünlük verilsə də, artıq bütün rənglərdə lələklər və qanadlar da istifadə olunur. Saç aksesuarları, üst və alt geyimi, ayaqqabılardan əlavə müxtəlif əl aksesuarları və üzün qaşlarla bəzədilməsi də stili tamamlayan detallardandır. Sadəcə Rio-de-Janeyroda keçirilən karnavallara baxaraq bu geyimlərin müxtəlifliyinə, möhtəşəmliyinə və cazibədarlığına şahid ola bilərsiniz.'}
                
                ideal={idealLength} 
               
              readMoreText="Daha ətraflı"  />
						
						</p>
					</div>
					
					</article>
					
									
					
				</div>
				<div className="clearfix">
				</div>
				<nav className="pagination"></nav>
				</main>
				{/* <!-- #main --> */}
			</div>
			{/* <!-- #primary --> */}
			
			<div id="secondary" className="column third">
				<div id="sidebar-1" className="widget-area" role="complementary">
				
					
					
					
					
					<aside id="text-6" className="widget widget_text">
					<h4 className="widget-title">Onları unutmaqmı olar? </h4>
					<div className="textwidget">
						<img src={Qarabaq}   width="340" height="380" style={{border:'none',overflow:"hidden"}} scrolling="no"  allowtransparency="true">
						</img>
						<img src={Xudayar}   width="340" height="380" style={{border:'none',overflow:"hidden"}} scrolling="no"  allowtransparency="true">
						</img>
						
					</div>
					</aside>
					
					
				
					
				</div>
				{/* <!-- .widget-area --> */}
			</div>
			{/* <!-- #secondary --> */}
		</div>
		{/* <!-- #content --> */}
	</div>
	{/* <!-- .container --> */}
	<footer id="colophon" className="site-footer">
	<div className="container">
		<div className="site-info">
			<h1 style={{fontfamily: 'Herr Von Muellerhoff',color: '#ccc',fontweight:300,textalign:' center',marginbottom:0,margintop:0,lineheight:1.4,fontsize: '46px'}}>Moschino</h1>
			<a target="blank" href="https://www.wowthemes.net/">&copy; Moschino - Free HTML Template by WowThemes.net</a>
		</div>
	</div>
	</footer>
	<a href="#top" className="smoothup" title="Back to top"><i className="fas fa-arrow-up fa-3x "></i></a>
</div>

        </div>
    )
}

export default Blog
