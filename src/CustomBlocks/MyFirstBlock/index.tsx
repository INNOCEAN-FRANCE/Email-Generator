import { IBlock, IBlockData, BasicType, components } from 'easy-email-core';
import { CustomBlocksType } from '../constants';
import React from 'react';
import { merge } from 'lodash';

const { Section, Column, Image, Wrapper, Text, Divider,Social } = components;

export type ICustomHeader = IBlockData<
  {
    'background-color': string;
    'text-color': string;
    'width-width': string;
  },
  {
    garantie: string,
    facebook: string,
    instagram: string,
    twitter: string,
    linkedin: string,
    youtube: string,
    ml: string,
  }
>;

export const MyFirstBlock: IBlock = {
  name: 'My first block',
  type: CustomBlocksType.MY_FIRST_BLOCK,
  create(
    payload
  ) {
    const defaultData: ICustomHeader = {
      type: CustomBlocksType.MY_FIRST_BLOCK,
      data:{
        value: {
          garantie: '/src/assets/img/batterie.png',
          facebook: '/src/assets/img/logo/icon_fb.png',
          instagram: '/src/assets/img/logo/icon_insta.png',
          twitter: '/src/assets/img/logo/icon_tw.png',
          linkedin: '/src/assets/img/logo/icon_li.png',
          youtube: '/src/assets/img/logo/icon_yt.png',
          ml: 'sdfsdf'
        },
      },
      attributes: {
        'background-color': '#4A90E2',
        'text-color': '#ffffff',
        'width': '25%'
      },
      children: [{
        "type": "advanced_text",
        "data": {
          "value": {
            "content": "Suivez-nous sur drivetobusiness.fr",
          }
        },
        "attributes": {
          "padding": "10px 25px 10px 25px",
          "align": "left"
        },
        "children": []
      }],
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.PAGE, BasicType.WRAPPER],
  render(data: ICustomHeader) {
    console.log('data', data)
    const { garantie, facebook, linkedin, twitter, instagram, youtube, ml } = data.data.data.value;
    const attributes = data.data.attributes;
    let text = data.data.children[0].data.value.content;
    console.log(data.data.children[0].data.value.content)

    const instance = (
      
        <><Section padding="0px 0px 20px 0px">

        <Column text-align='left' padding='0'>
          <Text padding='0' font-size='12px'>Suivez-nous sur drivetobusiness.fr</Text>
        </Column>

        <Column>
          <Section padding='0px 0px 0px 0px' text-align='right'>
            <Column>
              <Social padding="0px 0px 0px 0px">
                <Image padding="0px 0px 0px 0px" width="16" src={linkedin} align='left' />
                <Image padding="0px 0px 0px 0px" width="16" src={facebook} align='left' />
                <Image padding="0px 0px 0px 0px" width="16" src={twitter} align='left' />
                <Image padding="0px 0px 0px 0px" width="16" src={instagram} align='left' />
                <Image padding="0px 0px 0px 0px" width="16" src={youtube} align='left' />
            </Social>
           </Column>
          </Section>
        </Column>

      </Section><Section padding="0px 0px 0px 0px">
          <Column padding="0px 0px 0px 0px">
            <Divider width="600" padding="0px 0px 0px 0px" border-width="1px" border-color="#E9E9E9" border-style="solid" />
          </Column>
        </Section><Section padding="10px 0px 10px 0px">
          <Text font-weight='bold' font-size='12px' line-height='normal' align='left' min-width='100%'>Hyundai</Text>
          <Text font-size='12px' line-height='normal' align='left' min-width='100%'>©2023 Hyundai Motor France.</Text>
          <Text font-size='12px' line-height='normal' align='left' min-width='100%'>Tous droits réservés.</Text>
        </Section><Section padding="0px 0px 0px 0px">
          <Column padding="0px 0px 0px 0px">
            <Divider width="600" padding="0px 0px 0px 0px" border-width="1px" border-color="#E9E9E9" border-style="solid" />
          </Column>
        </Section><Section padding="20px 0px 0px 0px">
          <Column>
            <Image padding="0px 0px 0px 0px" width="250px" src={garantie} align='left' />
          </Column>
        </Section></>

        // {/* <Section padding="20px 0px 0px 0px" data-content_editable-type="rich_text" css-class={"mj-column-per-100 mj-outlook-group-fix email-block node-idx-" + data.idx +".children.[0] node-type-advanced_text"}>
        //   <Text line-height="normal">{text}</Text>
        // </Section> */}

      
    )
    return instance;
  },
};


export { Panel } from './Panel'