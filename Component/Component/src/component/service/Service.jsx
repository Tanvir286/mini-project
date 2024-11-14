import { IoIosBarcode } from "react-icons/io";
import SectionHeading from "../SectionHeading";
import ServiceCard from "./ServiceCard";
import Container from './../Container';
import Flex from "../Flex";


/*============================
        Icon import Start
============================*/
import { LuPaintbrush } from "react-icons/lu";
import { MdMonitor } from "react-icons/md";
import { FaPencilRuler } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa6";
import { SlPicture } from "react-icons/sl";
/*============================
        Icon import Start
============================*/


const Service = () => {
    return (
        <div className="bg-[#F8F9FA] py-24">

        <Container>
            
            <SectionHeading         
              para = "What I Do?"
              paraStyle="text-xl bg-yellow-300 inline-block px-1 mb-2"
              heading = "How I can help your next project"
              headingStyle="text-5xl font-semibold"
              tag = "h1"
              align = "text-center"/> 
         
         <Flex style="justify-between flex-wrap gap-y-10 mt-24">

             <div className="w-[30%] text-center">
               <ServiceCard 
                   iconName={<LuPaintbrush />} 
                   iconStyle="text-6xl inline-block text-[#eee8aa]"
                   titleText="Graphic Design"
                   titleStyle="text-3xl font-pop font-semibold my-2"
                   paraStyle="text-base font-pop text-[#8e9a9d]"
                   paraText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."/>
             </div>

             <div className="w-[30%] text-center">
               <ServiceCard 
                   iconName={<MdMonitor />} 
                   iconStyle="text-6xl inline-block text-[#eee8aa]"
                   titleText="Web Design"
                   titleStyle="text-3xl font-pop font-semibold my-2"
                   paraStyle="text-base font-pop text-[#8e9a9d]"
                   paraText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."/>
             </div>

             <div className="w-[30%] text-center">
               <ServiceCard 
                   iconName={<FaPencilRuler />} 
                   iconStyle="text-6xl inline-block text-[#eee8aa]"
                   titleText="UI/UX Design"
                   titleStyle="text-3xl font-pop font-semibold my-2"
                   paraStyle="text-base font-pop text-[#8e9a9d]"
                   paraText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."/>
             </div>

             <div className="w-[30%] text-center">
               <ServiceCard 
                   iconName={<FaPenNib />} 
                   iconStyle="text-6xl inline-block text-[#eee8aa]"
                   titleText="App Design & Develop"
                   titleStyle="text-3xl font-pop font-semibold my-2"
                   paraStyle="text-base font-pop text-[#8e9a9d]"
                   paraText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."/>
             </div>

             <div className="w-[30%] text-center">
               <ServiceCard 
                   iconName={<SlPicture />} 
                   iconStyle="text-6xl inline-block text-[#eee8aa]"
                   titleText="Business Analysis"
                   titleStyle="text-3xl font-pop font-semibold my-2"
                   paraStyle="text-base font-pop text-[#8e9a9d]"
                   paraText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."/>
             </div>

             <div className="w-[30%] text-center">
               <ServiceCard 
                   iconName={<LuPaintbrush />} 
                   iconStyle="text-6xl inline-block text-[#eee8aa]"
                   titleText="SEO Marketing"
                   titleStyle="text-3xl font-pop font-semibold my-2"
                   paraStyle="text-base font-pop text-[#8e9a9d]"
                   paraText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."/>
             </div>

        </Flex>

       </Container>

        </div>
    );
};

export default Service;