import { Flex } from "@chakra-ui/react";
import HomeServiceComp from "./HomeServiceComp";


const HomeServices = () => {
    const cardData : any = [
        {
          title: 'Create Your Online Courses Website.',
          preTitle: 'FOR ONLINE COURSES',
          Image: 'https://rainbowit.net/html/histudy/assets/images/splash/topfeature/01.png',
          gradiant: 'linear-gradient(151.71deg, #29C986 0%, #2FC8E5 100%) !important;',
          tags: [
            { name: 'individual instructor' },
            { name: 'multiple instructor' },
            { name: 'Marketplace' },
            { name: 'Single Course' },
            { name: 'Like Udemy' },
            { name: '& More...' },
          ],
        },
        {
          preTitle: 'FOR UNIVERSITY OR SCHOOL EDUCATION',
          title: 'Create Your Own Education Website.',
          Image: 'https://rainbowit.net/html/histudy/assets/images/splash/topfeature/02.png',
          gradiant: 'linear-gradient(151.71deg, #FF652D 0%, #FFA426 100%) !important;',
          tags: [
            { name: 'individual instructor' },
            { name: 'multiple instructor' },
            { name: 'Marketplace' },
            { name: 'Single Course' },
            { name: 'Like Udemy' },
            { name: '& More...' },
          ],
        },
        {
          preTitle: 'FOR PROFETIONAL COCHING',
          title: 'Create Your Coaching and Training Website.',
          Image: 'https://rainbowit.net/html/histudy/assets/images/splash/topfeature/03.png',
          gradiant: 'linear-gradient(151.71deg, #30C4FF 0%, #7259FF 100%) !important;',
          tags: [
            { name: 'individual instructor' },
            { name: 'multiple instructor' },
            { name: 'Marketplace' },
            { name: 'Single Course' },
            { name: 'Like Udemy' },
            { name: '& More...' },
          ],
        },
      ];

  return (
    <div>
        <Flex justify={'space-around'} flexDirection={{base : 'column', md : 'row'}} gap={4}>
        {
            cardData.map((item : any,index : any) => {
                return(
                    <HomeServiceComp key={index} item={item} />
                )
            })
        }
        </Flex>
    </div>
  )
}

export default HomeServices