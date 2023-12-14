import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { BillsCard } from "./BillsCard.jsx";



export const BillsFlow = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container text-center">
            <div className="row row-cols-lg-3 row-cols-sm-1 row-cols-md-2 row-cols-xl-4">
                {store.bills.map((bill) => (
                    <div className="col" key={bill.id}>
                        <div className="p-3">
                            <BillsCard bill={bill} id={bill.id} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
