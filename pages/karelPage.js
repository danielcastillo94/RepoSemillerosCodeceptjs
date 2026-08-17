const { I } = inject();

class youtubePage {
  urls = {
    video: "https://www.youtube.com/watch?v=9U57uqlxzQU&list=PLt1BzgDPWET6CWeBJryr-Wf4ZJWQ9sL01"
  }

  indicators = {
    searchField: "//input[@name='search_query']",
    videoThumbnail: "//img[contains(@src, '9U57uqlxzQU')]",
    videoPlayer: "//video[contains(@class, 'html5-main-video')]",
    commentsSection: "//ytd-comments[@id='comments']",
    sortByButton: "//div[@id='icon-label'][text()='Ordenar por']",
    newestOption: "//tp-yt-paper-listbox[@id='menu']//a[.//div[contains(text(), 'Más recientes')]]"
  }

  validation(){
    I.amOnPage('/');
  }

  search(){
    I.waitForElement(this.indicators.searchField, 10);
    I.fillField(this.indicators.searchField, 'CodeceptJS');
    I.pressKey("Enter");
  }

  searchResults(){
    I.waitForElement(this.indicators.videoThumbnail, 10);
  }

  playVideo(){
    I.click(this.indicators.videoThumbnail);
  }

  verifyVideoView(){
    I.waitForURL(this.urls.video, 10);
  }

  verifyCommentsView(){
    I.click(this.indicators.videoPlayer);
    I.pressKey('PageDown');
    I.wait(1);
    I.pressKey('PageDown');
    I.waitForVisible(this.indicators.commentsSection, 10);
  }

  filterComments(){
    I.waitForElement(this.indicators.sortByButton, 10);
    I.click(this.indicators.sortByButton);
  }

  filterByNewest(){
    I.waitForElement(this.indicators.newestOption, 10);
    I.click(this.indicators.newestOption);
  }

  verifyCommentsUpdated(){
    I.waitForVisible(this.indicators.commentsSection, 10);
  }
}

export default new youtubePage();