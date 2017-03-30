import { HL7EditorPage } from './app.po';

describe('hl7-editor App', () => {
  let page: HL7EditorPage;

  beforeEach(() => {
    page = new HL7EditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
