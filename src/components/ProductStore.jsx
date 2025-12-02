import Products from "./Products";
import Customer1 from "./Customer1";
import Customer2 from "./Custoner2";

function ProductStore() {
  return (
    <div>
      <h1>ProductStore</h1>
      <div className="row">
        <Products />
      </div>

      <div className="row">
        <div className="col-sm-6">
          <Customer1 />
        </div>
        <div className="col-sm-6">
          <Customer2 />
        </div>
      </div>
    </div>
  );
}

export default ProductStore;
