import React from 'react'
import './myLabel.css'

export interface Props {
    /**
   * This is the message that is in the label
   */
    label: string;
    /**
   * This is the size
   */
    size: 'normal' | 'h1' | 'h2' | 'h3'

    /**
   * Type of letters
   */
    allCaps?: boolean;

    color: 'primary' | 'secondary' | 'tertiary'

    fontColor?: string;
}


export default function MyLabel({ label = 'No Label', size = 'normal', allCaps, color, fontColor }: Props) {
    return (
        <span className={`${ size } ${'text-'+color}`} style={{color: fontColor}}>
            {allCaps ? label.toUpperCase():label}
        </span>
    )
}
