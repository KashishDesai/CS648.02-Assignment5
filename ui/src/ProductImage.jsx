/* eslint "react/prefer-stateless-function": "off" */
import React from 'react';

export default function ProductImage({ match }) {
  const { id } = match.params;
  console.log(match.path);
  return (
    <div>
      <img src={id} alt="ImageNotFound" />
    </div>
  );
}

// export default function ProductImage(props) {
//   // const { id } = match.params;
//   return (
//     <div>
//       <img width="500px" src={props.image_url.substring(7)} alt="ImageNotFound" />
//     </div>
//   );
// }
