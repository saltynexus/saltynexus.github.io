// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-jupyter-books",
          title: "Jupyter Books",
          description: "This is collection of Jupyter Books I&#39;ve created.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/jupyter_books/";
          },
        },{id: "dropdown-projects",
              title: "Projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/";
              },
            },{id: "dropdown-publications",
              title: "Publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "dropdown-people",
              title: "People",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/people/";
              },
            },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "jupyter_books-lecture-handbook-of-ocean-wave-energy",
          title: 'Lecture - Handbook of Ocean Wave Energy',
          description: "Introductory lecture material on ocean wave energy converters.",
          section: "Jupyter_books",handler: () => {
              window.location.href = "/jupyter_books/handbook_lecture/";
            },},{id: "jupyter_books-wave-energy-an-ocean-engineer-s-high-level-perspective",
          title: 'Wave Energy An Ocean Engineer’s High-Level Perspective',
          description: "A brief introduction to ocean energy.",
          section: "Jupyter_books",handler: () => {
              window.location.href = "/jupyter_books/ocean_energy_intro/";
            },},{id: "news-wets-ocean-energy-deploys-its-oe35-device-at-the-wave-energy-test-site-wets-more-updates-to-follow",
          title: 'WETS: Ocean Energy deploys its OE35 device at the Wave Energy Test Site...',
          description: "",
          section: "News",},{id: "news-wets-marine-corps-base-releases-article-on-oe35-deployment-at-the-wave-energy-test-site-wets-i-also-posted-a-video-taken-at-sea-along-side-oe35-post-deployment",
          title: 'WETS: Marine Corps Base releases article on OE35 deployment at the Wave Energy...',
          description: "",
          section: "News",},{id: "news-doe-41m-investment-strengthens-and-expands-marine-energy-r-amp-amp-d-and-testing-infrastructure-with-nmec-awards",
          title: 'DOE: $41M Investment strengthens and expands marine energy R&amp;amp;amp;D and testing infrastructure with...',
          description: "",
          section: "News",},{id: "news-wets-hawaii-public-radio-releases-interview-on-wave-energy-here-in-hawaii",
          title: 'WETS: Hawaii Public Radio releases interview on wave energy here in Hawaii.',
          description: "",
          section: "News",},{id: "projects-hawsec",
          title: 'HAWSEC',
          description: "Hawaii Wave Surge Energy Converter",
          section: "Projects",handler: () => {
              window.location.href = "/projects/HAWSEC/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%72%6F%79%68%65%69%74@%68%61%77%61%69%69.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/saltynexus", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-vimeo_username',
        title: 'Vimeo_username',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.hmec.us", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
