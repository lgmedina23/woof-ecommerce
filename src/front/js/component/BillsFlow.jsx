import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { BillsCard } from "./BillsCard.jsx";



export const BillsFlow = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container text-center">
            <div className="row row-cols-lg-7 row-cols-sm-2 row-cols-xs-2 row-cols-xl-5">
                {store.bill.map(() => (
                    <div className="col col-lg-4" key={bill.id}>
                        <div className="p-3">
                            <BillsCard bill={bill} id={bill.id} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
