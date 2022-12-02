import React from "react";
import Link from "next/link";
import * as ReactDOM from "react-dom";
import Image from "next/image";
import { MoreVertical, Edit3, Trash, Shield } from "react-feather";
import style from "./styles.module.scss";
import ModalOptions from "../ModalOptions/ModalOptions";

function View({
  img,
  title,
  subtitle,
  options,
  modalState,
  changeModalState,
  children,
}) {
  return (
    <div className={style.cardContainer}>
      {modalState &&
        document &&
        ReactDOM.createPortal(
          <ModalOptions changeStateModal={changeModalState}>
            {children}
          </ModalOptions>,
          document.getElementById("modalContainer")
        )}
      <Image
        src={
          "https://scontent.fctg1-4.fna.fbcdn.net/v/t39.30808-6/275576245_368936285098451_4743975802562067660_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_DlDHrxP7a0AX981eE3&_nc_ht=scontent.fctg1-4.fna&oh=00_AfCDdg56sBuCW11f_qHmGK2Qflt3dQ5IbSvysXmWoKuRvg&oe=6379AA04"
        }
        alt="Image profile"
        width={50}
        height={50}
        style={{ borderRadius: "50%" }}
      />
      <div className={style.infoPerson}>
        <h1>Andres Camilo Hernandez</h1>
        <span>Vendedor</span>
      </div>
      {options && <MoreVertical onClick={changeModalState} />}
    </div>
  );
}

export default View;
