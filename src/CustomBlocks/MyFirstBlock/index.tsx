import { IBlock, IBlockData, BasicType, components } from 'easy-email-core';
import { CustomBlocksType } from '../constants';
import React from 'react';
import { merge } from 'lodash';

const { Section, Column, Image, Text, Divider, Social } = components;

export type ICustomHeader = IBlockData<
  {
    'background-color': string;
    'text-color': string;
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
        'text-color': '#ffffff'
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
      },
      {
        "type": "BasicType.SOCIAL",
        "data": {
          "value": {
            "elements": [
              {
                "href": '#',
                "target": '_blank',
                "src": "/src/assets/img/logo/icon_fb.png",
                "content": '',
              },
              {
                "href": '#',
                "target": '_blank',
                "src": "/src/assets/img/logo/icon_fb.png",
                "content": '',
                
              },
              {
                "href": '',
                "target": '_blank',
                "src": "/src/assets/img/logo/icon_fb.png",
                "content": '',
              },
            ],
          },
        },
        attributes: {
          "align": 'left',
          "color": '#333333',
          "mode": 'vertical',
          'font-size': '13px',
          'font-weight': 'normal',
          'border-radius': '3px',
          "padding": '10px 25px 10px 25px',
          'inner-padding': '4px 4px 4px 4px',
          'line-height': '22px',
          'text-padding': '4px 4px 4px 0px',
          'icon-padding': '0px',
          'icon-size': '10px',
        },
        children: [],
      }
    ],

      
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.PAGE, BasicType.WRAPPER],
  render(data: ICustomHeader) {
    console.log('data', data)
    const { garantie, facebook, linkedin, twitter, instagram, youtube } = data.data.data.value;
    // const attributes = data.data.attributes;
    let text = data.data.children[0].data.value.content;
    let elements = data.data.children[1].data.value.elements;
    console.log('element', elements)

    const instance = (
      
        <><Section padding="0px 0px 20px 0px">

            <Column text-align='left' padding='0' width='100%'>
              <Text padding='0' font-size='12px'>Suivez-nous sur drivetobusiness.fr</Text>$
            </Column>

            <Social
              align='left'
              color='#333333'
              mode='vertical'
              padding='10px 25px 10px 25px'
              >
                {elements}
              </Social>
              

          </Section>

          <Section padding="0px 0px 0px 0px">
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
            </Section>

            <Section padding="20px 0px 0px 0px" data-content_editable-type="rich_text" css-class={"mj-column-per-100 mj-outlook-group-fix email-block node-idx-" + data.idx +".children.[0] node-type-advanced_text"}>
            <Text line-height="normal">{text}</Text>
            </Section> </>

      
    )
    return instance;
    
  },
  
};


export { Panel } from './Panel'