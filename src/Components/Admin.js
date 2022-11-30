import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { makeArrangement, disableSeats } from "../BookingSlice";
import styles from "./Button.module.css";

const Admin = () => {
  const sites = useSelector((state) => state.bookingSlices.arrangement);
  const dispatch = useDispatch();

  const [dimension, setDimension] = useState({ row: 0, column: 0 });

  return (
    <div>
      <header>
        <div className="inputs">
        <input
          type="number"
          placeholder="Enter rows"
          onChange={(e) => {
            setDimension({ ...dimension, row: e.target.value });
          }}
        />
        
        <input
          type="number"
          placeholder="Enter column"
          onChange={(e) => {
            setDimension({ ...dimension, column: e.target.value });
          }}
        />
        <button
          onClick={() => {
            dispatch(
              makeArrangement({ row: dimension.row, column: dimension.column })
            );
          }}
        >
          Generate sites
        </button>
        </div>
      </header>

      <main>
        <table>
          <tbody>
            {sites.map((item, index) => {
              return (
                <tr key={index}>
                  {item.map((item2, index2) => {
                    if (index2 === 0) {
                      return (
                        <td>
                          <td className="rs">Rs {100 * (index + 1)}  </td>
                          <td key={index2}>
                            <button
                              className={
                                item2[1]
                                  ? item2[1] === 999
                                    ? styles.buttonGray
                                    : styles.buttonGreen
                                  : styles.buttonRed
                              }
                              onClick={() =>
                                dispatch(
                                  disableSeats({ index: index, index2: index2 })
                                )
                              }
                            >
                              {item2[0]}
                            </button>
                          </td>
                        </td>
                      );
                    } else {
                      return (
                        <td key={index2}>
                          <button
                            className={
                              item2[1]
                                ? item2[1] === 999
                                  ? styles.buttonGray
                                  : styles.buttonGreen
                                : styles.buttonRed
                            }
                            onClick={() =>
                              dispatch(
                                disableSeats({ index: index, index2: index2 })
                              )
                            }
                          >
                            {item2[0]}
                          </button>
                        </td>
                      );
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="btn2">
          <NavLink to="/">
            <button>Go Back</button>
          </NavLink>
          <button
            onClick={() => {
              window.alert("Save Successfuly");
            }}
          >
            Save Disable Seats
          </button>
        </div>
      </main>
    </div>
  );
};

export default Admin;
