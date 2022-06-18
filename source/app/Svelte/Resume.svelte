<script>
  import i18n from '../../i18n';
  import AboutMe from './AboutMe.svelte';
  import Skills from './Skills.svelte';
  import Projects from './Projects.svelte';
  import Education from './Education.svelte';

  const about = i18n.t('aboutMe.description', { returnObjects: true });
  const skills = i18n.t('skills.description', { returnObjects: true });
  const projects = i18n.t('projects.description', { returnObjects: true });
  const education = i18n.t('education.description', { returnObjects: true });
</script>

<div class="container p-5">
  <div class="row mb-1">
    <div class="col">
      <h2 class="text-center">{i18n.t('header.title')}</h2>
      <p class="text-center caption-top">Frontend Developer</p>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <h3>{i18n.t('aboutMe.title')}</h3>
    </div>
  </div>
  <div class="row mb-1 p-2">
    <AboutMe {about} />
  </div>
  <div class="row">
    <div class="col">
      <h3>{i18n.t('skills.title')}</h3>
    </div>
  </div>
  <div class="row mb-5 p-2">
    <Skills {skills} />
  </div>
  <div class="row">
    <div class="col">
      <h3>{i18n.t('projects.title')}</h3>
    </div>
  </div>
  <div class="row mb-1">
    <div class="col p-2">
      <Projects drafts={projects} />
    </div>
  </div>
  <div class="row">
    <div class="col">
      <h3>{i18n.t('education.title')}</h3>
    </div>
  </div>
  <div class="row mb-1 p-2">
    <Education {education} />
  </div>
</div>

<style>
  h2 {
    font-size: 22px;
  }

  h3 {
    font-size: 20px;
  }

  p {
    font-size: 14px;
  }
</style>
