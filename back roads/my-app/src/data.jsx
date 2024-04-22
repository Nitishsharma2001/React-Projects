import tour1 from './assets/tour-1.jpeg'
import tour2 from './assets/tour-2.jpeg'
import tour3 from './assets/tour-3.jpeg'
import tour4 from './assets/tour-4.jpeg'
import about from './assets/about.jpeg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import { faSocks } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
// import { faSocks } from '@fortawesome/free-solid-svg-icons';
// import { faSocks } from '@fortawesome/free-solid-svg-icons';

var images = { tour1, tour2, tour3, tour4, about };
// console.log(images)

var OurServices = [
    { id:1,'logo': faWallet, 'title': "Saving Money", 'des': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." },
    { id:2,'logo': faTree, 'title': "Endless Hiking", 'des': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." },
    { id:3,'logo': faSocks, 'title': "Amazing Comfort", 'des': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." },
]

var tours = [{'id':1, 'img': tour1, 'title': "Tibet Adventure", 'des': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", 'tourdate': "August 26th, 2020",  'footerdays': "6 Days", 'price': "$2100", 'country': "China" },
{'id':2, 'img': tour2, 'title': "Tibet Adventure", 'des': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", 'tourdate': "October 1th, 2020",  'footerdays': "6 Days", 'price': "$2100", 'country': "Indonesia" },
{'id':3, 'img': tour3, 'title': "Tibet Adventure", 'des': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", 'tourdate': "September 15th, 2020",  'footerdays': "6 Days", 'price': "$2100", 'country': "Hong Kong" },
{'id':4, 'img': tour4, 'title': "Tibet Adventure", 'des': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", 'tourdate': "December 5th, 2019",  'footerdays': "6 Days", 'price': "$2100", 'country': "Kenya" }];

var social=[{'icon':faBook}]

export default {

    images,
    OurServices,
    tours
};
