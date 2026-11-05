---
layout: page
title: Lab Manual & Resources
permalink: /manual/
nav: true
nav_order: 2
toc:
  sidebar: right
---

<p class="manual-note">This manual is a working document. It is adapted from the lab manual of the
Imagine Reality Lab at UCL, which in turn drew on manuals by Steve Fleming, Roy Salomon, Anne
Urai and Mariam Aly.</p>

## Welcome

Welcome to the Imaging &amp; Imagery Lab. We use brain imaging to study the neuroscience of
mental imagery, and what that tells us about conscious experience.

## Getting started

Within your first week, try to do these:

- Read this manual.
- Meet the Lab Director to be added to the lab group chat and calendar.
- Read the background papers below.

## Vision and values

### Doing science well

Doing science is a privilege and a responsibility. We follow the usual standards of research
integrity — reliability, honesty, respect and accountability — and we should always be able to
explain the reasoning behind a decision, and to change our minds when the reasoning does not hold.

- **Make the work accessible.** Preprint when you can, publish open access when you can, and
  discuss the choice with your supervisor first.
- **Report transparently.** Never oversell a finding or hide an unexpected one. If the data do
  not show what you hoped, that is information, not failure — it is why the study was worth
  running.
- **Write code you could hand to someone else.** A pipeline that runs from raw data to the
  figure, with comments, saves you more time than it costs.
- **Share data.** Inside the lab, share freely. Outside, we aim to release data when the paper
  is published, unless there is a reason we cannot (for example, data that cannot be anonymised).

### Keeping an open mind

Once an explanation sounds good, it is tempting to look only for evidence that supports it. We
try to resist that: question each other, propose alternative explanations, and design the test
that could prove us wrong. Do it in a way that makes the science better rather than the person
smaller.

### Culture

Curiosity-driven work is worth doing for its own sake, and it is more fun with people who care
about it. We want a lab where people from different backgrounds can follow their curiosity, ask
basic questions without embarrassment, and disagree productively. In return we ask for real
commitment to the research and to keeping the culture healthy.

### Well-being

Happy scientists do better science. Work-life balance is not a concession to be earned; it is
what makes sustained work possible. Take breaks, keep something outside work, and tell someone
early if the workload is getting out of hand — we routinely underestimate how long things take.

Research is also unusually exposed to uncertainty, and the feedback that your work is going
somewhere often arrives months late. Feeling like an impostor is common and says very little
about your actual ability. If you are struggling, talk to your supervisor in confidence; the
university’s counselling service is also available and does not require you to explain yourself
to us first.

### Diversity and respect

We want the lab to be a place where people from different backgrounds can do their best work.
Beyond fairness, diverse teams ask better questions and catch each other’s blind spots.

There is zero tolerance for harassment, sexism, racism, homophobia, transphobia or any other
form of bigotry. If you experience or witness misconduct, feel free to tell Zihao about it. If
Zihao is the concern, take it to the department’s relevant office.

## Expectations and responsibilities

Everyone in the lab is expected to:

- Work on something you care about, and do it in a way you would be happy to defend.
- Be supportive of colleagues — we are a team, and the work depends on people being able to
  count on each other.
- Keep up with the field and suggest improvements to what we do, whether in methods, analysis,
  open science or culture.
- Be open about mistakes. You will make them; hiding them is what turns a mistake into a
  problem. Nobody will be shamed for saying “this is wrong, here is how I found out”.
- Try to prevent mistakes in the first place: do not rush, check twice, and ask when something
  looks off.
- Know the limits of your knowledge, and do not be afraid to ask — or to respectfully disagree
  with someone more senior, including your supervisor.
- Judge when to keep trying and when to ask for help. If you know the next step, take it; if you
  can no longer see one, stop and ask rather than losing days.
- Take an active role in your own development, and say what kind of career you are aiming at.

## General policies

### Authorship

We follow the APA guidelines: authorship credit should reflect the individual’s contribution to
the study. We discuss authorship at the start of a project, not at the end. The person leading a
project is normally first author, and the supervising PI normally last. If roles change later, we
revisit the question explicitly rather than letting it drift.

### Communication

Experiment schedules, and everything we commit to — tasks, deadlines, meetings — live in the
shared lab calendar. The group chat is how we stay in touch, not how we assign work: we use it to
flag things already agreed in the calendar, and to coordinate while an experiment is running.

During an experiment, the people involved should keep the chat within reach. Outside experiment
periods, the chat is simply a place to talk, argue about papers and learn from each other.

Communication styles differ across cultures and backgrounds, and most misunderstandings come from
assumptions rather than bad intent. If something someone said landed badly, ask what they meant
before concluding.

### Programming

We mostly use MATLAB (SPM, FieldTrip) for imaging and electrophysiology, and jsPsych for online
experiments. Python and R are welcome where they fit better. The rule is that someone else in the
lab should be able to run your code from the repository: keep it documented, keep it reproducible,
and put it on GitHub.

### Deadlines

Academia has few fixed deadlines, which makes it easy for things to drift. If you work better with
explicit checkpoints, say so and we will set them. If a deadline you agreed to is no longer
realistic, say that early rather than at the deadline.

## Thank you

For reading this far. If anything here is unclear, wrong, or missing, tell the Lab Director — that
is how the manual gets better. We hope you have a good and productive time here.

## Internal Access

<div class="lab-internal" markdown="0">
  <p><strong>For lab members.</strong> Enter the password you were given to open your own
  materials. Each password opens only its own set of files. The files are stored encrypted:
  without the password they cannot be read from this site.</p>
  <form id="unlock-form" autocomplete="off">
    <div class="lab-unlock-row">
      <input type="password" id="unlock-password" placeholder="Password" aria-label="Password"
             autocomplete="current-password" required>
      <button type="submit" id="unlock-button">Unlock</button>
    </div>
  </form>
  <p class="lab-msg" id="unlock-msg" role="status" aria-live="polite"></p>
  <div class="lab-files" id="unlock-files" hidden></div>
  <p class="lab-hint">Lost your password? Ask the Lab Director — it cannot be recovered from
  the site, only reset.</p>
</div>

<style>
  .lab-internal {
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 10px;
    padding: 1.2rem 1.15rem;
  }
  .lab-unlock-row { display: flex; flex-wrap: wrap; gap: .6rem; margin: .6rem 0 0; }
  .lab-unlock-row input {
    flex: 1 1 15rem; min-width: 0; font: inherit; padding: .5rem .7rem;
    border: 1px solid var(--global-divider-color); border-radius: 7px;
    background: var(--global-bg-color); color: var(--global-text-color);
  }
  .lab-unlock-row button {
    font: inherit; font-weight: 600; padding: .5rem 1.1rem; border: 0;
    border-radius: 7px; background: var(--global-theme-color); color: #fff; cursor: pointer;
  }
  .lab-unlock-row button:disabled { opacity: .6; cursor: progress; }
  .lab-msg { margin: .7rem 0 0; font-size: .92rem; color: var(--global-text-color-light); }
  .lab-msg.error { color: #c0392b; }
  .lab-msg.ok { color: #2e7d4f; }
  .lab-files { margin-top: .8rem; }
  .lab-files a { display: block; padding: .5rem .1rem; border-top: 1px solid var(--global-divider-color); }
  .lab-files .size { color: var(--global-text-color-light); font-size: .85rem; }
  .manual-note { font-size: .82rem; color: var(--global-text-color-light); font-style: italic; margin-bottom: 1.6rem; }
  .lab-hint { margin: .9rem 0 0; font-size: .82rem; color: var(--global-text-color-light); }
</style>

<script src="{{ '/assets/js/internal.js' | relative_url | bust_file_cache }}" defer></script>
