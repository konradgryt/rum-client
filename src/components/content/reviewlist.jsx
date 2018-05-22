// import React from 'react';
// import Utility from '../utility';
// import Review from './review';

// class ReviewList extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {list : []};
//   }

//   componentDidMount() {
//     Utility.get('/review').then(json => {
//       console.log(json);
//         this.setState({
//           list: json
//         });
//       });
//   }

//   render() {
//     return (
//       <section className='reviewlist'>
//         list of reviews:
//          {this.state.list.map(items =>
//            <Review 
//                 image = {items.image}
//                 rumId = {items.rumId}
//                 userId=  {items.userId}
//                 rating = {items.userId}
//                 additionalInfo = {items.additionalInfo}
//            />
//         )}
//       </section>
//     );
//   }
// }

// export default ReviewList;