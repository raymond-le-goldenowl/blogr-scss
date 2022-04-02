import './styles.scss';

// import custom hooks.
import useWindowSize from 'hooks/useWindowSize';

// import images.
import illustrationPhones from 'assets/images/illustration-phones.svg';
import illustrationEditorMobile from 'assets/images/illustration-editor-mobile.svg';
import illustrationLaptopMobile from 'assets/images/illustration-laptop-mobile.svg';
import illustrationEditorDesktop from 'assets/images/illustration-editor-desktop.svg';
import illustrationLaptopDesktop from 'assets/images/illustration-laptop-desktop.svg';
import bgPatternCircles from 'assets/images/bg-pattern-circles.svg';

export default function MainSection() {
	const size = useWindowSize();
	const breakPointTablet = 1439;

	return (
		<div className='main-section'>
			<div className='title'>Designed for the future</div>
			<section>
				<div className='left'>
					<img
						src={
							size.width > breakPointTablet
								? illustrationEditorDesktop
								: illustrationEditorMobile
						}
						alt='illustration-editor-desktop'
					/>
				</div>
				<div className='right'>
					<article>
						<header>
							<h5>Introducing an extensible editor</h5>
						</header>

						<p>
							Blogr features an exceedingly intuitive interface which lets you
							focus on one thing: creating content. The editor supports
							management of multiple blogs and allows easy manipulation of
							embeds such as images, videos, and Markdown. Extensibility with
							plugins and themes provide easy ways to add functionality or
							change the looks of a blog.
						</p>
					</article>

					<article>
						<header>
							<h5> Robust content management</h5>
						</header>

						<p>
							Flexible content management enables users to easily move through
							posts. Increase the usability of your blog by adding customized
							categories, sections, format, or flow. With this functionality,
							you're in full control.
						</p>
					</article>
				</div>
			</section>

			<section>
				<div className='second-image'>
					<img src={bgPatternCircles} alt='bg-pattern-circle' />
				</div>
				<div className='left'>
					<img src={illustrationPhones} alt='illustration-phones' />
				</div>
				<div className='right'>
					<article>
						<header>
							<h5>State of the Art Infrastructure</h5>
						</header>

						<p>
							With reliability and speed in mind, worldwide data centers provide
							the backbone for ultra-fast connectivity. This ensures your site
							will load instantly, no matter where your readers are, keeping
							your site competitive.
						</p>
					</article>
				</div>
			</section>

			<section>
				<div className='left'>
					<img
						src={
							size.width > breakPointTablet
								? illustrationLaptopDesktop
								: illustrationLaptopMobile
						}
						alt=''
					/>
				</div>
				<div className='right'>
					<article>
						<header>
							<h5>Free, open, simple</h5>
						</header>

						<p>
							Blogr is a free and open source application backed by a large
							community of helpful developers. It supports features such as code
							syntax highlighting, RSS feeds, social media integration,
							third-party commenting tools, and works seamlessly with Google
							Analytics. The architecture is clean and is relatively easy to
							learn.
						</p>
					</article>
					<article>
						<header>
							<h5> Powerful tooling</h5>
						</header>

						<p>
							Batteries included. We built a simple and straightforward CLI tool
							that makes customization and deployment a breeze, but capable of
							producing even the most complicated sites.
						</p>
					</article>
				</div>
			</section>
		</div>
	);
}
