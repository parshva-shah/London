
import Link from 'next/link'

export default function Section11() {
	return (
		<>

			<div className="contact5-bg-section">
				<div className="img1">
					<img src="/assets/img/all-images/contact/contact-img5.png" alt="" className="contact-img1" />
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="space48" />
							<div className="row">
								<div className="col-lg-6 col-md-6">
									<div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={900}>
										<div className="icons">
											<img src="/assets/img/icons/mail1.svg" alt="" />
										</div>
										<div className="text">
											<h5>Our Email</h5>
											<div className="space14" />
											<Link href="/maito:eventify@gmail.com">eventify@gmail.com</Link>
										</div>
									</div>
									<div className="space18" />
									<div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={1000}>
										<div className="icons">
											<img src="/assets/img/icons/location1.svg" alt="" />
										</div>
										<div className="text">
											<h5>our location</h5>
											<div className="space14" />
											<Link href="/#">1800 Abbot Kinney</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-6">
									<div className="space20 d-md-none d-block" />
									<div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={1000}>
										<div className="icons">
											<img src="/assets/img/icons/phn1.svg" alt="" />
										</div>
										<div className="text">
											<h5>Call/Message</h5>
											<div className="space14" />
											<Link href="/tel:+11234567890">+1 123 456 7890</Link>
										</div>
									</div>
									<div className="space18" />
									<div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={1200}>
										<div className="icons">
											<img src="/assets/img/icons/instagram.svg" alt="" />
										</div>
										<div className="text">
											<h5>Instagram</h5>
											<div className="space14" />
											<Link href="/#">eneventify.eve</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mapouter">
					<div className="gmap_canvas">
						<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4506257.120552435!2d88.67021924228865!3d21.954385721237916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1704088968016!5m2!1sen!2sbd" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
					</div>
				</div>
			</div>

		</>
	)
}
