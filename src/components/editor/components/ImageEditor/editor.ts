import { FilerobotImageEditorConfig, TABS, TOOLS } from "./types";

export class Editor {

  static getConfig(): Partial<FilerobotImageEditorConfig> {
    return {
      annotationsCommon: {
        fill: '#ff0000',
      },
      Text: { text: 'Filerobot...' },
      Rotate: { angle: 90, componentType: 'slider' },
      translations: {
        profile: 'Profile',
        coverPhoto: 'Cover photo',
        facebook: 'Facebook',
        socialMedia: 'Social Media',
        fbProfileSize: '180x180px',
        fbCoverPhotoSize: '820x312px',
      },
      Crop: {
        presetsItems: [
          {
            titleKey: 'classicTv',
            descriptionKey: '4:3',
            ratio: 4 / 3,
            // icon: CropClassicTv, // optional, CropClassicTv is a React Function component. Possible (React Function component, string or HTML Element)
          },
          {
            titleKey: 'cinemascope',
            descriptionKey: '21:9',
            ratio: 21 / 9,
            // icon: CropCinemaScope, // optional, CropCinemaScope is a React Function component.  Possible (React Function component, string or HTML Element)
          },
        ],
        presetsFolders: [
          {
            titleKey: 'socialMedia', // will be translated into Social Media as backend contains this translation key
            // icon: Social, // optional, Social is a React Function component. Possible (React Function component, string or HTML Element)
            groups: [
              {
                titleKey: 'facebook',
                items: [
                  {
                    titleKey: 'profile',
                    width: 180,
                    height: 180,
                    descriptionKey: 'fbProfileSize',
                  },
                  {
                    titleKey: 'coverPhoto',
                    width: 820,
                    height: 312,
                    descriptionKey: 'fbCoverPhotoSize',
                  },
                ],
              },
            ],
          },
        ],
      },
      tabsIds: [TABS.RESIZE, TABS.ADJUST, TABS.ANNOTATE], // or ['Adjust', 'Annotate', 'Watermark']
      defaultTabId: TABS.ADJUST, // or 'Annotate'
      defaultToolId: TOOLS.CROP, // or 'Text'
    };
  }
}