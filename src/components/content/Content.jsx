import { useApp } from '../../hooks/useApp';
import SingleCart from './SingleCart';
import SingleWC from './SingleWC';

function Content({ props, wc }) {
  const { cartItems } = useApp();

  if (wc) {
    return (
      <>
        {cartItems.map((item) => {
          return (
            <SingleWC
              key={item.id}
              props={item}
            />
          );
        })}
      </>
    );
  } else {
    return (
      <>
        {props.map((item) => {
          return (
            <SingleCart
              key={item.id}
              props={item}
            />
          );
        })}
      </>
    );
  }
}

export default Content;
