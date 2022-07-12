import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyLabel from "../../components/MyLabel";

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color: {control: 'select', options: ['primary', 'secondary', 'tertiary']}
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) =>  <MyLabel {...args} />

export const Basic = Template.bind({})
Basic.args = {
    size: 'normal',
    allCaps: false
}

export const AllCaps = Template.bind({})
AllCaps.args = {
    size: 'normal',
    allCaps: true
}

export const Secondary = Template.bind({})
Secondary.args = {
    size: 'normal',
    color: 'secondary'
}


export const Terciary = Template.bind({})
Terciary.args = {
    size: 'normal',
    color: 'tertiary'
}

export const CustomFontColor = Template.bind({})
CustomFontColor.args = {
    size: 'h1',
    fontColor: '#5517ac'
}

export const CustomBackgorundColor = Template.bind({})
CustomBackgorundColor.args = {
    size: 'h1',
    fontColor: '#5517ac',
    backgroundColor: 'black'

}
