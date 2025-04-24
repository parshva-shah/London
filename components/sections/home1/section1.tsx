
import { useMyContext } from '@/app/context/MainContext';
import Countdown from '@/components/elements/Countdown'
import Link from 'next/link'

export default function Section1() {
	const { mainData } = useMyContext();

	return (
		<>

<div className="container-fluid p-0">
					<div className="row">
						<div className="col-lg-12">
<img src={mainData?.data?.bannerImg[0]?.bannerD?.formats?.large?.url} alt="" className="header-bg1 w-100" />
</div>
</div>
</div>
			<div className="hero1-section-areaOld">
				{/* <div className="bg1">
					
				</div> */}
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="hero1-header heading1">
								{/* <h5 data-aos="fade-left" data-aos-duration={800}><img src="/assets/img/icons/sub-logo1.svg" alt="" />Lead Purpose, Innovate with Passion</h5> */}
								<div className="space60" />
								<h1 className="text-anime-style-3">
									{/* {mainData?.data?.Intro?.eventName} */}
								</h1>
								<div className="space60" />
								<p data-aos="fade-left" data-aos-duration={900}>
									{/* {mainData?.data?.Intro?.eventDetails} */}
								</p>
								<div className="space60" />
								<div className="btn-area1" data-aos="fade-left" data-aos-duration={1100}>
									{/* <Link href="/schedule" className="vl-btn1">{mainData?.data?.Intro?.registerBtn}</Link> */}
									{/* <Link href="/about" className="vl-btn2">Learn More</Link> */}
								</div>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="header-images">
								<div className="img1" data-aos="zoom-in" data-aos-duration={1000}>
									{/* <img src="/assets/img/all-images/hero/hero-img1.png" alt="" /> */}
								</div>
								{/* <div className="images-content-area" data-aos="fade-up" data-aos-duration={900}>
									<h3>THE INNOVATION SUMMIT</h3>
									<div className="space12" />
									<Link href="/#">January 15-16, 2025</Link>
									<div className="space12" />
									<Link href="/#">CITY CENTER CONVENTION CENTER, NEW YORK CITY</Link>
									<div className="space16" />
									<p>Join us for an extraordinary two-day journey into the realm of innovation at The
										Innovation Summit.</p>
								</div> */}
							</div>
						</div>
						<div className="col-lg-1">
						{/* <Countdown /> */}
						</div>
					</div>
				</div>
			</div>


			

		</>
	)
}
