
import Countdown from '@/components/elements/Countdown'
import Link from 'next/link'

export default function Section1() {
	return (
		<>

			<div className="hero9-slider-area p-0">
				<div className="container-fluid p-0">
					<div className="row">
						<img className="dkview" src="assets/img/london/LondonD.jpg" />
						<img className="mbview" src="assets/img/london/LondonM.jpg" />
					</div>
				</div>
				<div className="container hero9-slider-area pt-0 lightblue-bg">
			<div className="row">
						<div className="col-lg-12">
							<div className="timer-bg-area">
								<div className="row">
									<div className="col-lg-7">
										<div className="timer-btn-area m-0">
										<Countdown style={1} />
										</div>
									</div>
									<div className="col-lg-5">
										<div className="heading12">
											<h3>20 - 21 June 2025</h3>
											<div className="space16" />
											<p><img src="/assets/img/icons/location1.svg" alt="" /> Byron Hall, Harrow Leisure Centre, Christchurch Ave, 
											Harrow HA3 5BD</p>
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
