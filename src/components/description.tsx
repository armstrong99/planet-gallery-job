import '../styles/Home.module.scss'

 export interface DescriptionProps {
     
 }
  
 const Description: React.FC<DescriptionProps> = () => {
     return ( 
         <>
          <section className='describtion'>
    <h3 className="text-white text-3xl md:text-6xl font-black md:h-auto">
     We Are a <br /> Solution <br />
Expert Team
     </h3>

     <p className="font-thin text-white mt-10 md:mt-20 md:text-2xl md:h-auto">
    First premium technological solution center <br />
     for effective business growth. We brand, <br/> create softwares {'&'} impact modern tech <br/>
     industry required skills.
     </p>
    </section>
    
         </>
      );
 }
  
 export default Description;