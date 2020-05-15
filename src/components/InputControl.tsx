import React from "react";
import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";

const InputControl: React.FC<{
  selectedValue: 'mkg' | 'ftlbs';
  onSelectValue: (value: 'mkg' | 'ftlbs') => void;
}> = (props) => {
    const inputChangehandler = (event: CustomEvent) => {
        props.onSelectValue(event.detail.value);
    }


  return (
    <IonSegment value={props.selectedValue} onIonChange={inputChangehandler}>
      <IonSegmentButton value="mkg">
        <IonLabel>m/Kg</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="ftlbs">
        <IonLabel>ft/lbs</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default InputControl;
