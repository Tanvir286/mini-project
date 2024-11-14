import Container from "../Container";
import Flex from "../Flex";
import SectionHeading from "../SectionHeading";
import Title from "../Title";
import ResumeItem from "./ResumeItem";



const Resume = () => {
    return (
        <div className="bg-[#ffffff] py-20">

         <Container>

             <SectionHeading         
              para = "Resume"
              paraStyle="text-xl bg-yellow-300 inline-block px-1 mb-2"
              heading = "A summary of My Resume"
              headingStyle="text-5xl font-semibold"
              tag = "h1"
              align = "text-center"/> 

           <Flex style="justify-between mt-24">
               
                <div className="w-1/2 pr-5">

                <Title style="font-pop text-3xl font-semibold mb-8"  text="MY Education" />

                 <div className="border-l-2 border-[#eee8aa] pl-4">

                 <ResumeItem 
                   titleStyle="text-xl font-pop font-semibold my-3"
                   titleText="Master in Computer Engineering"
                   paraStyle="text-base font-pop"
                   paraText="Harvard University / 2015 - 2017"
                   paraStyle2="text-base border-b border-[#8e9a9d] pb-6 text-[#8e9a9d] mt-3 "
                   paraText2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."/>
               
                 <ResumeItem 
                   titleStyle="text-xl font-pop font-semibold my-3 mt-8"
                   titleText="Bachelor in Computer Engineering"
                   paraStyle="text-base font-pop"
                   paraText="University of California / 2014 - 2015"
                   paraStyle2="text-base border-b border-[#8e9a9d] pb-6 text-[#8e9a9d] mt-3"
                   paraText2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."/>
                
                 <ResumeItem 
                   titleStyle="text-xl font-pop font-semibold my-3 mt-8"
                   titleText="Master in Computer Engineering"
                   paraStyle="text-base font-pop"
                   paraText="Harvard University / 2015 - 2017"
                   paraStyle2="text-base border-b border-[#8e9a9d] pb-6 text-[#8e9a9d] mt-3"
                   paraText2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."/>

                 </div>
               
                </div>

                 <div className="w-1/2">

                <Title style="font-pop text-3xl font-semibold mb-8"  text="MY Experience" />

                 <div className="border-l-2 border-[#eee8aa] pl-4">

                 <ResumeItem 
                   titleStyle="text-xl font-pop font-semibold my-3"
                   titleText="Sr. Font End Developer"
                   paraStyle="text-base font-pop"
                   paraText="Apple Inc / 2020 - current"
                   paraStyle2="text-base border-b border-[#8e9a9d] pb-6 text-[#8e9a9d] mt-3 "
                   paraText2="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."/>
               
                 <ResumeItem 
                   titleStyle="text-xl font-pop font-semibold my-3 mt-8"
                   titleText="Jr. Font End Developer"
                   paraStyle="text-base font-pop"
                   paraText="Dribbble Inc / 2018 - 2020"
                   paraStyle2="text-base border-b border-[#8e9a9d] pb-6 text-[#8e9a9d] mt-3"
                   paraText2="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."/>
                
                 <ResumeItem 
                   titleStyle="text-xl font-pop font-semibold my-3 mt-8"
                   titleText="HTML Developer"
                   paraStyle="text-base font-pop"
                   paraText="Adobe Inc / 2017 - 2018"
                   paraStyle2="text-base border-b border-[#8e9a9d] pb-6 text-[#8e9a9d] mt-3"
                   paraText2="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."/>

                 </div>
               
                </div>
         
           </Flex>


          </Container>
            
        </div>
    );
};

export default Resume;