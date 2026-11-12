'use strict';

const projects = {
  'award-stories': {
    category: 'STORYTELLING / AWARD SUBMISSIONS',
    title: 'From technical details to award stories.',
    intro: 'I wrote the complete copy and assembled the award submission package for each of the three winning projects featured below.',
    role: 'Full copywriting and complete award submission packaging for each featured project.',
    context: 'Valmont Coatings · Customer case studies and American Galvanizers Association award submissions.',
    challenge: 'Industrial projects bring together technical specifications, engineering decisions, and demanding environments. A compelling story needs to explain those details clearly while keeping the customer’s original challenge at its center.',
    contributions: [
      'Interview customers and project stakeholders to understand the problem, the decision process, and the role of corrosion protection.',
      'Write the complete project narrative, bringing technical information, customer needs, and stakeholder feedback into one clear story.',
      'Coordinate reviews and prepare the final materials for case studies and award submissions.'
    ],
    result: 'My work supported 11 winning AGA Excellence in Hot-Dip Galvanizing projects from 2023–2025.',
    qualifier: 'This total covers 2023–2025; the published examples also include a 2026 winner. I produce 30+ customer case studies and award submissions annually.',
    takeaway: 'Specific questions lead to specific stories. The most useful narrative connects the customer’s problem with the project team’s decisions and the reasons those decisions mattered.',
    publications: [
      {
        title: 'IGC Philippines — INEOS Project One',
        award: '2026 AGA winner · International',
        summary: 'The story of corrosion protection, quality, and coordination behind steel modules bound for Antwerp.',
        url: 'https://galvanizeit.org/project-gallery/igc-philippines-ineos-project-one'
      },
      {
        title: 'University of Houston Bird Blind',
        award: '2025 AGA winner · Civic Contribution',
        summary: 'A student-designed wildlife observatory connecting sustainable materials, hands-on learning, and community use.',
        url: 'https://galvanizeit.org/project-gallery/university-of-houston-graduate-design-studio-bird-blind-for-the-woodlands-township'
      },
      {
        title: '14th & Court — Populus Hotel',
        award: '2025 AGA winner · Building & Architecture',
        summary: 'The galvanized steel behind a distinctive Denver façade, bringing design ambition and long-term durability together.',
        url: 'https://galvanizeit.org/project-gallery/14th-court-populous-hotel'
      }
    ],
    tags: ['Interviewing', 'Technical storytelling', 'Copywriting', 'Stakeholder review', 'Project coordination']
  },
  'facility-branding': {
    category: 'BRAND STEWARDSHIP / PROJECT MANAGEMENT',
    title: 'Making a distributed brand feel connected.',
    intro: 'A brand lives in the places people experience it. I helped bring a more consistent direction to facility branding across North America.',
    role: 'Initial strategy, site prioritization, budget planning, creative briefing, and facility coordination.',
    context: 'Valmont Coatings · North American facility branding initiative.',
    challenge: 'Facility branding had developed inconsistencies across locations. The opportunity was to create a clearer expression of the company brand and its values, with a practical approach that individual sites could understand and use.',
    contributions: [
      'Develop the initial strategy, identify priority facilities, outline the budget, and gather early design ideas.',
      'Partner with graphic designers to turn that direction into a shared design guide.',
      'Use the guide to communicate proposed updates to facilities and coordinate the path toward rollout.'
    ],
    result: 'A shared design guide and a practical framework for coordinating facility updates.',
    qualifier: 'My role centers on strategy and coordination, working with graphic designers and site teams. The initiative is a phased rollout.',
    takeaway: 'Brand consistency needs a usable plan. A design direction becomes more valuable when the people responsible for putting it into place understand the priorities and next steps.',
    tags: ['Brand strategy', 'Creative briefing', 'Budget planning', 'Design collaboration', 'Rollout coordination']
  },
  'events': {
    category: 'EVENT MARKETING / CUSTOMER EXPERIENCE',
    title: 'Bringing people closer to the brand.',
    intro: 'An event is a collection of details that should feel effortless to the person attending. I help connect those details into one thoughtful experience.',
    role: 'Event planning, logistics, stakeholder communication, materials coordination, and vendor collaboration.',
    context: 'Valmont · Customer events, webinars, plant tours, conferences, and lunch-and-learns.',
    challenge: 'Customer and industry events bring together multiple teams, shifting schedules, technical content, and on-site logistics. The experience works best when every contributor understands what is happening and what the audience needs.',
    contributions: [
      'Coordinate schedules, logistics, presenters, and internal teams around a shared plan.',
      'Align marketing materials and event communications with the audience and the purpose of the experience.',
      'Work with vendors and stakeholders to manage the details before and during the event.'
    ],
    result: 'Experience coordinating customer events, webinars, tours, and conferences involving 50–100+ attendees.',
    qualifier: 'This describes the scale of events in my experience; attendance varies by event.',
    takeaway: 'Preparation creates room for connection. Clear communication and a dependable plan let the team focus on the people in front of them.',
    tags: ['Event coordination', 'Customer experience', 'Vendor communication', 'Logistics', 'Cross-functional teamwork']
  },
  'digital': {
    category: 'DIGITAL CAMPAIGNS / SOCIAL CONTENT',
    title: 'Connecting content and performance.',
    intro: 'I enjoy both sides of marketing: developing the message and understanding how people respond to it.',
    role: 'Content support, campaign coordination, performance reporting, and recommendations.',
    context: 'Valmont · Digital marketing, social content, and Google Ads initiatives.',
    challenge: 'Creative decisions become more useful when the team can connect them to performance. That means organizing results clearly and turning reporting into questions and actions for the next round of work.',
    contributions: [
      'Develop and coordinate content across marketing channels, keeping the audience and brand voice in view.',
      'Prepare performance reports and review engagement and campaign trends.',
      'Use reporting to inform recommendations and collaborate with stakeholders on improvements.'
    ],
    result: 'An 18% year-over-year increase in Facebook engagement in 2023.',
    qualifier: 'Facebook engagement, year over year in 2023. My broader experience includes paid digital campaigns and performance reporting.',
    takeaway: 'A useful report helps people make a decision. I look for ways to connect the numbers to a clear next question, content opportunity, or improvement.',
    tags: ['Social content', 'Google Ads', 'Campaign coordination', 'Performance reporting', 'Content strategy']
  },
  'training': {
    category: 'VIDEO CONTENT / EXPERT COLLABORATION',
    title: 'Making technical knowledge teachable.',
    intro: 'For a kettle operator training video series, I worked with engineering stakeholders to turn specialized knowledge into clear, practical content.',
    role: 'Stakeholder collaboration, scripting, plant production coordination, and editing.',
    context: 'Valmont · Kettle operator training video series.',
    challenge: 'Subject matter experts hold knowledge that can be difficult to translate for a learning audience. The content needed to preserve technical meaning and give the viewer a clear path through the material.',
    contributions: [
      'Meet with engineering stakeholders to understand the training requirements and gather the right technical input.',
      'Develop scripts and coordinate the plant shoot around the people, processes, and footage needed.',
      'Work through editing and stakeholder review to shape the series into a useful training resource.'
    ],
    result: 'A training video series developed through collaboration with engineering stakeholders.',
    qualifier: 'My contribution brought together scripting, production coordination, and editing in collaboration with the engineering team.',
    takeaway: 'Strong technical content begins with listening. Asking experts to explain what matters most helps create a clearer experience for the person learning.',
    tags: ['Subject matter interviews', 'Scriptwriting', 'Video production', 'Editing', 'Technical communication']
  },
  'web': {
    category: 'WEBSITE CONTENT / CROSS-FUNCTIONAL DELIVERY',
    title: 'Building a clearer path through the website.',
    intro: 'I approach web content from the customer’s point of view: what do they need to know, and how quickly can they find it?',
    role: 'Content planning, copy development, customer journey thinking, and coordination with web and creative teams.',
    context: 'Valmont Coatings · Website content and customer experience work.',
    challenge: 'Customers need practical information about locations, capabilities, services, and next steps. Content planning needs to make those answers easy to understand and consistent across the website.',
    contributions: [
      'Help organize location and service content around common customer questions, including facility capabilities and contact information.',
      'Develop and review website copy, page concepts, and supporting content with internal stakeholders.',
      'Coordinate with creative and web teams to move feedback and content updates toward delivery.'
    ],
    result: 'Customer-focused content planning and cross-functional support for website improvements.',
    qualifier: 'The website work is ongoing. My broader experience includes support for the launch of an international ecommerce website, with a focus on content and collaboration with creative and web teams.',
    takeaway: 'Useful content starts with a useful question. When the page is organized around what the visitor is trying to accomplish, its purpose becomes clearer.',
    tags: ['Web copy', 'Content planning', 'Customer journeys', 'Stakeholder feedback', 'Web team collaboration']
  }
};

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuButton.querySelector('span').textContent = expanded ? '＋' : '−';
  navigation.classList.toggle('is-open', !expanded);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('span').textContent = '＋';
  navigation.classList.remove('is-open');
}));

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  document.querySelectorAll('.filter').forEach(item => {
    const selected = item === button;
    item.classList.toggle('is-active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  let visible = 0;
  document.querySelectorAll('.project').forEach(project => {
    project.hidden = filter !== 'all' && project.dataset.category !== filter;
    if (!project.hidden) visible++;
  });
  document.querySelector('#filter-status').textContent = `Showing ${visible} ${visible === 1 ? 'project' : 'projects'}.`;
}));

const dialog = document.querySelector('#project-dialog');
let returnFocus = null;
const escapeHTML = value => value.replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
function showProject(id, trigger, syncHash = true) {
  const project = projects[id];
  if (!project) return;
  returnFocus = trigger || document.querySelector(`[data-project="${id}"]`);
  const publications = project.publications ? `
    <section class="story-publications" aria-labelledby="published-work-heading">
      <div class="publication-heading"><h3 id="published-work-heading">Read my published work</h3><p>AGA Excellence in Hot-Dip Galvanizing Award winners</p></div>
      <ul class="publication-list">${project.publications.map(story => `
        <li><a class="publication-link" href="${escapeHTML(story.url)}" target="_blank" rel="noopener noreferrer" aria-label="Read ${escapeHTML(story.title)} on the AGA website (opens in a new tab)">
          <span class="publication-copy"><span class="publication-award">${escapeHTML(story.award)}</span><strong>${escapeHTML(story.title)}</strong><span class="publication-summary">${escapeHTML(story.summary)}</span><span class="publication-action">Read the full story on AGA</span></span>
          <span class="publication-arrow" aria-hidden="true"><svg class="arrow-icon" viewBox="0 0 24 24" fill="none"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" stroke-width="1.5"/></svg></span>
        </a></li>`).join('')}</ul>
    </section>` : '';
  document.querySelector('#dialog-content').innerHTML = `
    <p class="dialog-category">${escapeHTML(project.category)}</p>
    <h2 id="dialog-title">${escapeHTML(project.title)}</h2>
    <p class="dialog-intro">${escapeHTML(project.intro)}</p>
    ${publications}
    <div class="dialog-facts"><div><h3>MY CONTRIBUTION</h3><p>${escapeHTML(project.role)}</p></div><div><h3>CONTEXT</h3><p>${escapeHTML(project.context)}</p></div></div>
    <section class="story-section"><h3>The challenge</h3><p>${escapeHTML(project.challenge)}</p></section>
    <section class="story-section"><h3>How I approached it</h3><ul>${project.contributions.map(text => `<li>${escapeHTML(text)}</li>`).join('')}</ul></section>
    <div class="dialog-result"><div class="eyebrow">WHAT CAME TOGETHER</div><p>${escapeHTML(project.result)}</p><small>${escapeHTML(project.qualifier)}</small></div>
    <section class="story-section"><h3>What I bring forward</h3><p>${escapeHTML(project.takeaway)}</p></section>
    <div class="dialog-tags" aria-label="Skills demonstrated">${project.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join('')}</div>`;
  if (!dialog.open) dialog.showModal();
  document.body.classList.add('dialog-open');
  dialog.scrollTop = 0;
  dialog.querySelector('.dialog-close').focus({preventScroll:true});
  if (syncHash) history.pushState({project:id}, '', '#project-' + id);
}

function closeProject(syncHash = true) {
  if (dialog.open) dialog.close();
  document.body.classList.remove('dialog-open');
  if (syncHash && location.hash.startsWith('#project-')) history.replaceState(null, '', '#work');
  if (returnFocus && !returnFocus.closest('[hidden]')) returnFocus.focus({preventScroll:true});
}
document.querySelectorAll('[data-project]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault(); showProject(link.dataset.project, link);
}));
document.querySelectorAll('.dialog-close').forEach(button => button.addEventListener('click', () => closeProject()));
dialog.addEventListener('cancel', event => { event.preventDefault(); closeProject(); });
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeProject();
});
window.addEventListener('hashchange', () => {
  const key = location.hash.replace('#project-', '');
  if (location.hash.startsWith('#project-') && projects[key]) showProject(key, null, false);
  else if (dialog.open) closeProject(false);
});
if (location.hash.startsWith('#project-')) {
  showProject(location.hash.replace('#project-', ''), null, false);
}

document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('.copy-status');
  try {
    await navigator.clipboard.writeText('amy7nelson@gmail.com');
    status.textContent = 'Email copied. Say hello!';
  } catch {
    status.textContent = 'Email: amy7nelson@gmail.com';
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
