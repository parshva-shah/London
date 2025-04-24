
import Countdown from '@/components/elements/Countdown'
import Link from 'next/link'

export default function Section9() {
	return (
		<>

			<div className="cta1-section-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-10 m-auto">
							
							<div className="cta1-main-boxarea">
							<h2 className="text-offwhite">Contact</h2>
								<div className="row">
									<div className="col-lg-6 firstcol">
									<ul>
									<li>
										<Link href="/#">For Sponsorship</Link>
									</li>
								</ul>
								<div className="about4-heading heading6">
								<ul data-aos="fade-left d-block" data-aos-duration={1000}>
									<li><img src="/assets/img/icons/user1.svg" alt="" />Aadit Virani</li>
									<li><img src="/assets/img/icons/phn1.svg" alt="" /> +44 7986 555572</li>
									<li><img src="/assets/img/icons/mail1.svg" alt="" />london.events@srmd.org</li>
							    </ul>
						       </div>
									</div>
									<div className="col-lg-4">
									<ul>
									<li className="m-0">
										<Link href="/#">For Registrations</Link>
									</li>
								</ul>
								<div className="about4-heading heading6">
								<ul data-aos="fade-left d-block" data-aos-duration={1000}>
									<li><img src="/assets/img/icons/phn1.svg" alt="" />07835 237 325</li>
									<li><img src="/assets/img/icons/mail1.svg" alt="" />uk.registration@srmd.org</li>
							    </ul>
						       </div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
