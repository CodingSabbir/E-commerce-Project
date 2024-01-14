import React from 'react';
import CountUp from 'react-countup';
import { FcDataRecovery } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { FcRatings } from "react-icons/fc";
import { Link } from 'react-router-dom';
const subTitle = "Why Choose Us";
const title = "Become a Marchant";
const desc = "Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn";
const btnText = "Apply Now";

const countList = [
{
iconName:<FcContacts />,
count: '12600',
text: 'Marchant Enrolled',
},
{
iconName: <FcRatings />,
count: '30',
text: 'Certified Courses',
},
{
iconName: <FcDataRecovery />,
count: '100',
text: 'Rewards and GitCards',
},
]
const AboutUs = () => {
    return (
        <div>
            <section>
	<div class="bg-black text-white -mt-12  pb-8 md:py-1 md:mt-20">
		<div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
			<div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            {
  countList.map((val, i) => (
    <div key={i} className='flex items-center gap-5'>
        <div >
        <i className='text-[35px] px-10 '>{val.iconName}</i>
        </div>
        <div >
            <p className='text-[25px] font-semibold'><CountUp end={val.count}  /> +</p>
            <p className='font-mono'>{val.text}</p>
        </div>
     
    </div>
  ))
}
<Link to={'/signup'}
        className=" mt-10 bg-transparent hover:bg-blue-700 hover:text-white text-white rounded shadow hover:shadow-lg py-2 px-4 border border-blue-300 hover:border-transparent">
        {btnText}
      </Link>
			</div>
			<div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
				<div class="h-48 flex flex-wrap content-center">
					<div>
						<img class="inline-block mt-28 hidden xl:block" src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"/></div>
						<div>
							<img class="inline-block mt-24 md:mt-0 p-8 md:p-0"  src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"/></div>
							<div>
								<img class="inline-block mt-28 hidden lg:block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"/></div>
							</div>
						</div>
					</div>
	</div>
</section>
        </div>
    );
};

export default AboutUs;