
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
							<h2 className="text-offwhite text-center pb-4">Contact</h2>
								<div className="row">
									<div className="col-lg-6 col-md-6 firstcol">
									<ul>
									<li className="pb-3">
										<Link href="/#">For Sponsorship</Link>
									</li>
								</ul>
								<div className="about4-heading heading6">
								<ul data-aos="d-block" data-aos-duration={1000}>
									<li className="pb-2">Aadit Virani | +44 7986 555572</li>
									<li>london.events@srmd.org</li>
							    </ul>
						       </div>
									</div>
									<div className="col-lg-4 col-md-5">
									<ul>
									<li className="m-0 pb-3">
										<Link href="/#">For Registrations</Link>
									</li>
								</ul>
								<div className="about4-heading heading6">
								<ul data-aos="d-block" data-aos-duration={1000}>
									<li className="pb-2">07835 237 325</li>
									<li>uk.registration@srmd.org</li>
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
