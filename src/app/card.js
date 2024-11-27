export function CARD(props) {
  return (
    <div className="card" key={props.product.id}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div className="firstname">
            {props.product.firstName}
            <div className="lastname">{props.product.lastName}</div>
          </div>
          <p className="designer">Designer</p>

          <div className="phonenumber">
            {props.product.phoneNumber}
            <div>{props.product.email}</div>
            <div>{props.product.address}</div>
          </div>
        </div>
        <div>
          <div className="company-name">
            company name:
            <div style={{ fontSize: "12px" }}>{props.product.companyName}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
