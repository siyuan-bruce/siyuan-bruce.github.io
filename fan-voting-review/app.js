'use strict';
const VERSION='scenario-2026-10-21-v39-artist-role-highlights';
const ACTIVITY_ACKNOWLEDGEMENT='I understand this is a hypothetical voting activity.';
const INTRO_VIDEOS=Object.freeze({
 jennie:{id:'mKQgxwnDezg',start:50,end:65,source:'https://www.youtube.com/watch?v=mKQgxwnDezg',file:'media/jennie_15s.mp4',title:'SOLO',credit:'SBSKPOP X INKIGAYO · 2 December 2018'},
 yooyeon:{id:'8I7hhcdxEyg',start:24,end:39,source:'https://www.youtube.com/watch?v=8I7hhcdxEyg',file:'media/yooyeon_m2_15s.mp4',title:'Girls Never Die',credit:'M2 · M COUNTDOWN · 23 May 2024'}
});
const MEMBERS=Object.freeze({jennie:{name:'Jennie',group:'BLACKPINK',photo:'media/jennie.jpg'},yooyeon:{name:'Yooyeon',group:'tripleS',photo:'media/yooyeon_m2.jpg'}});
const CHOICES=Object.freeze(['A','B']);
const ARTIST_ORDERS=Object.freeze([['jennie','yooyeon'],['yooyeon','jennie']]);
const SCENARIO=Object.freeze({intro_videos:INTRO_VIDEOS,intro_video_duration_seconds_each:15,intro_video_order:'randomized_artist_position_order_A_then_B',intro_video_exposure:'two_distinct_artist_clips_before_choice',member_identities:['jennie','yooyeon'],member_selection:'participant_choice_before_scenario_disclosure',outcome_reference:'participant_chosen_artist',initial_budget_cents:500,price_per_right_cents:5,initial_spending_design:'common_unit_price_no_refund',pilot_checks:'post_outcome_core_checks_no_feedback',progress_counting:'response_and_playback_screens_only',screen_format:'progressive_screens_with_grouped_artist_support',poll_decision:'featured_artist_for_kpop_release',poll2_decision:'featured_artist_for_another_kpop_release',vote_display:'animated_assigned_participation',stake_measure:'initial_number_of_voting_rights_held',other_fans:100,other_rights_per_poll:1000,campaign_polls:2,first_platform_poll:true,same_candidates_in_poll2:true,repeat_winner_eligible:true,rights_expire_after_poll2:true,poll2_budget_cents:100,earlier_money_separate:true,discussion_topic:'upcoming_kpop_releases',baseline_ratings:'grouped_familiarity_and_support_for_each_artist',loss_winner_assignment:'other_artist_wins_given_loss'});
const designs={
 rights:{label:'Voting rights and participation',short:'Rights × voting',hypothesis:'H1 and the design comparison',description:'Does a voting experience change intended purchases of voting rights differently when voting rights are single-use or reusable?',fixed:'Five initial rights; win/loss is randomized before the Poll 2 choice.',cells:[['single',5,true],['single',5,false],['reusable',5,true],['reusable',5,false]]},
 stake:{label:'Rights held and participation',short:'Holdings × voting',hypothesis:'H2 under single-use rights',description:'Is the voter–non-voter difference in intended purchases of voting rights smaller for large holders than for small holders?',fixed:'Five or 100 initial rights; single-use rights; win/loss is randomized before the Poll 2 choice.',cells:[['single',5,true],['single',5,false],['single',100,true],['single',100,false]]},
 outcome:{label:'Rights held and the vote outcome',short:'Holdings × outcome',hypothesis:'H3 under single-use rights',description:'Is the loss–win difference in intended purchases of voting rights more negative for large voters than for small voters?',fixed:'Five or 100 initial rights; single-use rights; all participants vote. An assigned win or loss precedes the second-poll purchase decision.',cells:[['single',5,true,'win'],['single',5,true,'loss'],['single',100,true,'win'],['single',100,true,'loss']]}
};
const app=document.getElementById('app');
const REVIEW_MODE=document.body.dataset.mode==='review';
let selected='rights',run=null,step=0,view='overview';
let voteAnimationTimer=null;
const VOTE_ANIMATION_MS=1800;
const PILOT_ITEMS=Object.freeze([
 {id:'pilot_size',field:'perceived_initial_holding_size',kind:'rating',title:'Your initial voting rights',question:'How small or large did your initial number of voting rights seem?'},
 {id:'pilot_holdings',field:'initial_rights_recall',kind:'choice',title:'Your starting rights',question:'How many voting rights did you hold at the start of the scenario, before Poll 1?',options:[['0','0 rights'],['5','5 rights'],['10','10 rights'],['100','100 rights'],['unknown','I don’t remember']]},
 {id:'pilot_rule',field:'rule_application',kind:'choice',title:'The voting rule',question:'Imagine having 5 voting rights and using 3 in Poll 1. Under your voting rule, how many could you use in Poll 2 before buying more?',options:[['0','0 rights'],['2','2 rights'],['3','3 rights'],['5','5 rights'],['unknown','I’m not sure']]},
 {id:'pilot_outcome',field:'outcome_recall',kind:'choice',title:'The first-poll result',question:'Did your chosen artist win or lose Poll 1?',options:[['win','Won'],['loss','Lost'],['unknown','I don’t remember']]},
 {id:'pilot_purchase',field:'purchase_meaning',kind:'choice',title:'Your Poll 2 choice',question:'What did the number you selected for Poll 2 represent?',options:[['additional','Additional voting rights to buy'],['total','Total voting rights, including rights already held'],['past_votes','Votes already cast in Poll 1'],['unknown','I’m not sure']]}
]);
const SCREENS=Object.freeze([
 {id:'familiarity',label:'Prior familiarity',event:'Prior familiarity: both artists'},
 {id:'intro_clip_a',label:'First artist clip',event:'First artist performance clip'},
 {id:'intro_clip_b',label:'Second artist clip',event:'Second artist performance clip'},
 {id:'intro',label:'Choose an artist',event:'Member choice'},
 {id:'initial_support',label:'Initial support',event:'Initial support: all artists'},
 {id:'video',label:'The new video',event:'Video brief'},
 {id:'candidates',label:'The candidates',event:'Candidates'},
 {id:'holdings',label:'Your rights',event:'Your situation'},
 {id:'campaign',label:'Two polls',event:'Campaign'},
 {id:'rule',label:'Voting rule',event:'Voting rule'},
 {id:'rule_check',label:'Rule check',event:'Rule comprehension'},
 {id:'other_fans',label:'Other fans',event:'Other-fan context'},
 {id:'expected',label:'Your expectation',event:'Expectations'},
 {id:'vote',label:'Poll 1 vote',event:'First-poll voting'},
 {id:'result',label:'Poll 1 result',event:'First-poll win/loss'},
 {id:'influence',label:'Your influence',event:'Perceived influence'},
 {id:'disconfirmation',label:'Compared with expected',event:'Influence disconfirmation'},
 {id:'disappointment',label:'Your reaction',event:'Disappointment'},
 {id:'poll2',label:'The next video',event:'Second-poll introduction'},
 {id:'budget',label:'Your new budget',event:'Second-poll budget'},
 {id:'purchase',label:'Your purchase choice',event:'Second-poll choice'},
 {id:'social',label:'Fan discussion',event:'Fan discussion intention'},
 ...PILOT_ITEMS.map(item=>({id:item.id,label:item.title,event:'Pilot check: '+item.field})),
 {id:'finish',label:'Finish',event:'Debrief'}
]);
const RESPONSE_SCREEN_IDS=Object.freeze(['familiarity','intro_clip_a','intro_clip_b','intro','initial_support','rule_check','expected','influence','disconfirmation','disappointment','purchase','social',...PILOT_ITEMS.map(item=>item.id)]);
const money=c=>'$'+(c/100).toFixed(2);
const cellLabel=c=>`${c[0]==='single'?'Single-use':'Reusable'} · ${c[1]} rights · ${c[3]?(c[3]==='win'?'Win':'Loss'):(c[2]?'Voted':'Did not vote')}`;
function randomIndex(n){const limit=Math.floor(4294967296/n)*n;let x;do{x=crypto.getRandomValues(new Uint32Array(1))[0]}while(x>=limit);return x%n;}
function tokenStrip(available,used=0){return `<div class="tokens" aria-label="${available} available voting rights and ${used} used rights">${Array.from({length:available},()=>'<span class="token" aria-hidden="true">1</span>').join('')}${Array.from({length:used},()=>'<span class="token used" aria-hidden="true">×</span>').join('')}</div>`;}
function announce(){stopVoteAnimation();app.setAttribute('tabindex','-1');app.focus({preventScroll:true});window.scrollTo(0,0)}
function experienceFlow(){const labels=['Voting rights','Expectations','Poll 1 voting','Poll 1 result','Reaction','Poll 2 choice','Fan discussion'];return `<ol class="flow">${labels.map((label,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span>${label}</li>`).join('')}</ol>`;}
function showResearchLinks(visible){document.querySelectorAll('[data-research-only]').forEach(button=>{button.hidden=!(visible&&REVIEW_MODE);});}
function welcomeAcknowledgement(){return `<label class="check"><input type="checkbox" id="welcomeAck"><span>${ACTIVITY_ACKNOWLEDGEMENT}</span></label><div class="error" id="welcomeError" role="alert"></div>`;}
function bindWelcomeEntry(){document.getElementById('startCombined').onclick=startFromWelcome;document.getElementById('welcomeAck').onchange=()=>{document.getElementById('welcomeError').textContent='';};}
function startFromWelcome(){
 if(view!=='overview')return false;
 if(!document.getElementById('welcomeAck')?.checked){document.getElementById('welcomeError').textContent='Please confirm that you understand this is a hypothetical voting activity.';return false;}
 const confirmedAt=new Date().toISOString();
 startCombined();
 run.activity_acknowledgement={version:'welcome-notice-v1',statement:ACTIVITY_ACKNOWLEDGEMENT,confirmed:true,confirmed_at:confirmedAt,timing:'before_random_assignment'};
}
function overview(){
 view='overview';showResearchLinks(true);
 if(!REVIEW_MODE){document.getElementById('leaveActivity').hidden=true;app.innerHTML=`<section class="sheet welcome-sheet"><h1>Welcome.</h1><p class="lead">Read each situation and select your response.</p><p class="fine">You may stop at any time.</p>${welcomeAcknowledgement()}<div class="actions"><button class="primary" id="startCombined">Get started →</button></div></section>`;bindWelcomeEntry();return;}
 app.innerHTML=`<section class="hero"><div><div class="eyebrow">Fan voting · preview</div><h1>Imagine a fan vote.</h1><p class="lead">Read a short scenario. Choose what you would think and do.</p>${welcomeAcknowledgement()}<div class="actions"><button class="primary" id="startCombined">Start →</button></div><p class="fine" style="margin-top:20px">Research-team preview only. Ethics approval is required before participant testing.</p></div><div class="rule-illustration"><h3>What you’ll do</h3><div class="rule-row"><b>1. Read</b><p class="fine">Learn how your voting rights work.</p></div><div class="rule-row"><b>2. Choose</b><p class="fine">Select your answers.</p></div><div class="rule-row"><b>3. Finish</b><p class="fine">Review your choices.</p></div></div></section><div class="notice"><p>This is a hypothetical scenario. No real purchases or votes take place.</p></div>`;
 bindWelcomeEntry();
}
function startCombined(){selected=Object.keys(designs)[randomIndex(3)];start('random',true);}
function research(){
 if(!REVIEW_MODE)return;
 view='research';showResearchLinks(true);const d=designs[selected];
 app.innerHTML=`<section class="hero"><div><div class="eyebrow">Researcher preview</div><h1>Three studies.<br>One common sequence.</h1><p class="lead">Everyone sees the first poll’s result before choosing for Poll 2.</p><p class="fine">The entry assigns one of three studies, then one of its four primary conditions. Studies 1 and 2 independently randomize win/loss within each condition. Study 3 includes win/loss in its holdings × outcome conditions. The two artist orders are equally likely.</p><p class="fine">Coauthor review only. Ethics approval is required before participant testing.</p></div><div class="rule-illustration"><h3>Different rules for your voting rights.</h3><p class="fine">Imagine holding 10 rights and casting 6 votes.</p><div class="rule-row"><b>Single-use</b>${tokenStrip(4,6)}<div class="fine">4 rights remain for the next poll.</div></div><div class="rule-row"><b>Reusable</b>${tokenStrip(10)}<div class="fine">All 10 rights remain for the next poll.</div></div></div></section><section class="section"><div class="sectiontop"><h2>Choose a study to review</h2><p class="fine">Four primary conditions per study</p></div><div class="cards">${Object.entries(designs).map(([key,d],i)=>`<article class="study-card ${selected===key?'selected':''}"><small>STUDY ${i+1}</small><h3>${d.label}</h3><p>${d.description}</p><p class="fine">${d.hypothesis}</p><button data-design="${key}" aria-pressed="${selected===key}">${selected===key?'Selected':'Review this design'}</button></article>`).join('')}</div></section><section class="section"><h2>The participant sequence</h2>${experienceFlow()}<div class="config preview-config"><div><label for="condition">${d.short}: preview condition</label><select id="condition"><option value="random">Random primary condition</option>${d.cells.map((c,i)=>`<option value="${i}">${cellLabel(c)}</option>`).join('')}</select><div class="fieldhint">${d.fixed}</div></div>${selected==='outcome'?'<div class="fieldhint">The selected condition determines the win/loss result.</div>':'<div><label for="resultPreview">Poll 1 result</label><select id="resultPreview"><option value="random">Random win or loss · 50/50</option><option value="win">Your chosen artist wins</option><option value="loss">Another artist wins</option></select></div>'}<button class="primary" id="start">Start scenario →</button></div></section>`;
 app.querySelectorAll('[data-design]').forEach(b=>b.onclick=()=>{selected=b.dataset.design;research()});
 document.getElementById('start').onclick=()=>start(document.getElementById('condition').value,false,selected==='outcome'?'random':document.getElementById('resultPreview').value);
}
function start(choice,randomizedStudy=false,previewOutcome='random',previewOrder='random'){
 const randomCondition=choice==='random',i=randomCondition?randomIndex(4):Number(choice);
 if(!Number.isInteger(i)||i<0||i>3)throw new Error('Invalid preview condition');
 const c=designs[selected].cells[i],outcomeFactor=selected==='outcome',randomOutcome=!outcomeFactor&&previewOutcome==='random';
 const outcome=outcomeFactor?c[3]:randomOutcome?['win','loss'][randomIndex(2)]:previewOutcome;
 if(!['win','loss'].includes(outcome))throw new Error('Invalid preview outcome');
 const randomAvatar=previewOrder==='random',orderIndex=randomAvatar?randomIndex(ARTIST_ORDERS.length):Number(previewOrder);
 if(!Number.isInteger(orderIndex)||orderIndex<0||orderIndex>=ARTIST_ORDERS.length)throw new Error('Invalid artist order');
 const order=[...ARTIST_ORDERS[orderIndex]];
 const primaryProbability=randomizedStudy&&randomCondition?1/12:null;
 const scenarioProbability=primaryProbability===null?null:primaryProbability*(randomOutcome?.5:1);
 run={version:VERSION,mode:REVIEW_MODE?'research_preview':'participant_preview',entry_route:randomizedStudy?'unified_random_entry':'researcher_preview',assignment_method:randomizedStudy?'browser_random_study_then_condition':randomCondition?'browser_random_condition_within_selected_study':'manual_preview',study_assignment_method:randomizedStudy?'browser_random_equal_probability':'manual_preview',study_assignment_probability:randomizedStudy?1/3:null,condition_assignment_method:randomCondition?'browser_random_equal_probability':'manual_preview',condition_assignment_probability:randomCondition?1/4:null,assignment_probability:primaryProbability,scenario_assignment_probability:scenarioProbability,presentation_assignment_probability:scenarioProbability===null?null:scenarioProbability*(randomAvatar?1/ARTIST_ORDERS.length:1),outcome_assignment_method:outcomeFactor?'included_in_primary_condition':randomOutcome?'browser_random_equal_probability':'manual_preview',outcome_probability_given_condition:outcomeFactor?1:randomOutcome?.5:null,avatar_assignment_method:randomAvatar?'browser_random_equal_probability':'manual_preview',avatar_assignment_probability:randomAvatar?1/ARTIST_ORDERS.length:null,artist_order_index:orderIndex,candidate_order:order,avatar_for_a:order[0],avatar_for_b:order[1],design:selected,condition_index:i,rights:c[0],initial_voting_rights:c[1],scenario_parameters:{...SCENARIO},scenario_voted:c[2],assigned_outcome:outcome,started_at:new Date().toISOString(),primary_outcome:{measure:'intended_second_poll_voting_right_purchases',timing:'after_assigned_first_poll_result',voting_rights:null,spending_cents:null},secondary_outcome:{measure:'intended_fan_discussion_participation',discussion_topic:SCENARIO.discussion_topic,timing:'after_assigned_first_poll_result',scale_min:1,scale_max:7,response:null},responses:{},comprehension_attempts:[],events:[]};
 step=0;view='study';renderStep();
}
function steps(){return SCREENS.map(screen=>screen.event);}
function participantSteps(){return SCREENS.map(screen=>screen.label);}
function screenId(){return SCREENS[step]?.id;}
function responseProgress(index=step){const completed=SCREENS.slice(0,index).filter(screen=>RESPONSE_SCREEN_IDS.includes(screen.id)).length;return {completed,total:RESPONSE_SCREEN_IDS.length,current:RESPONSE_SCREEN_IDS.includes(SCREENS[index]?.id)?completed+1:null};}
function pilotScreen(item){
 const name='pilot_'+item.field;
 const question=item.kind==='rating'?scale(name,item.question,7,'Very small','Very large'):`<fieldset class="question"><legend>${item.question}</legend><div class="pilot-options">${item.options.map(([value,label])=>`<label class="pilot-option"><input type="radio" name="${name}" value="${value}"><span>${label}</span></label>`).join('')}</div></fieldset>`;
 return `<div class="eyebrow">About the scenario</div><h1>${item.title}</h1>${question}${nextButton()}`;
}
function savePilotAnswer(item){
 const raw=radio('pilot_'+item.field);
 if(raw===undefined)return fail('Please choose a response.');
 const value=item.kind==='rating'?Number(raw):raw;
 if(item.kind==='rating'?(!Number.isInteger(value)||value<1||value>7):!item.options.some(([option])=>option===value))return fail('Please choose a response.');
 if(!run.pilot_checks)run.pilot_checks={version:'pilot-checks-v2-core',timing:'after_primary_and_secondary_outcomes',started_at:new Date().toISOString(),responses:{},factual_results:{}};
 run.pilot_checks.responses[item.field]=value;
 if(item.kind!=='rating'){
  const expected={initial_rights_recall:String(run.initial_voting_rights),rule_application:run.rights==='single'?'2':'5',outcome_recall:run.assigned_outcome,purchase_meaning:'additional'}[item.field];
  run.pilot_checks.factual_results[item.field]={response:value,expected,correct:value===expected,uncertain:value==='unknown'};
 }
 return true;
}
function completePilotChecks(){
 const checks=run.pilot_checks,results=Object.values(checks.factual_results);
 checks.completed_at=new Date().toISOString();
 checks.factual_summary={correct:results.filter(result=>result.correct).length,total:results.length,uncertain:results.filter(result=>result.uncertain).length};
}
function contextRecap(){return `<div class="context-recap" aria-label="Your scenario summary"><span>${run.rights==='single'?'Single-use rights':'Reusable rights'}</span><span>Initial rights: <b>${run.initial_voting_rights}</b></span></div>`;}
function compactFacts(items){return `<dl class="quick-facts">${items.map(([label,value])=>`<div><dt>${label}</dt><dd>${value}</dd></div>`).join('')}</dl>`;}
function firstPurchaseSummary(){
 const cost=run.initial_voting_rights*SCENARIO.price_per_right_cents;
 return `<p>You bought <b>${run.initial_voting_rights} voting rights for ${money(cost)}</b>.</p>${compactFacts([['Starting budget',money(SCENARIO.initial_budget_cents)],['Price per right',money(SCENARIO.price_per_right_cents)],['Money left',money(SCENARIO.initial_budget_cents-cost)]])}<p class="fine">Voting rights cannot be resold.</p>`;
}
function available(){return run.scenario_voted&&run.rights==='single'?0:run.initial_voting_rights;}
function scale(name,title,max=7,left='Not at all',right='Very much',middle=''){return `<div class="question"><fieldset><legend>${title}</legend><div class="scale scale-${max}">${Array.from({length:max},(_,i)=>`<label class="choice"><input type="radio" name="${name}" value="${i+1}">${i+1}</label>`).join('')}</div><div class="anchors ${middle?'anchors-three':''}"><span>1 = ${left}</span>${middle?`<span>4 = ${middle}</span>`:''}<span>${max} = ${right}</span></div></fieldset></div>`;}
function nextButton(text='Continue →'){return `<div class="error" role="alert" id="error"></div><div class="actions"><button class="primary" id="next">${text}</button></div>`;}


function votePictures(count,used=0){return `<div class="vote-pictures${count+used>10?' many-rights':''}" aria-hidden="true">${Array.from({length:count},()=>'<span class="vote-disc">1</span>').join('')}${Array.from({length:used},()=>'<span class="vote-disc consumed">×</span>').join('')}</div>`;}
function holdingState(label,rights,used=0){return `<div class="holding-state" data-available="${rights}" data-used="${used}"><h3>${label}</h3><div class="holding-row">${votePictures(rights,used)}<strong>${rights} voting rights available${used?` · ${used} used up`:''}</strong></div></div>`;}
function votingDiagram(rights,cast,example=false){
 const used=run.rights==='single'?cast:0,remaining=rights-used;
 return `<figure class="experiment-visual voting-visual" aria-label="${example?'Example':'Your assigned situation'}: ${rights} voting rights before voting; ${cast} votes cast; ${remaining} voting rights available for the next poll."><figcaption>${example?'Example · 10 rights, 6 votes cast':'Your voting rights'}</figcaption><div class="holding-flow">${holdingState('Before voting',rights)}<div class="visual-arrow" aria-hidden="true">→</div>${holdingState('For the next poll',remaining,used)}</div><p class="visual-key">Circles = available rights${used?' · Crossed circles = used-up rights':''}</p></figure>`;
}
function chosenChoice(){return run.member_choice.choice;}
function otherChoices(){return CHOICES.filter(choice=>choice!==chosenChoice());}
function winningChoice(outcome=run.assigned_outcome){return outcome==='win'?chosenChoice():run.other_winner_choice;}
function memberRole(choice){return run.member_choice?(choice===chosenChoice()?'Your chosen artist':'Another artist'):'';}
function memberRoleBadge(choice){return `<span class="artist-role artist-role-${choice===chosenChoice()?'chosen':'other'}">${memberRole(choice)}</span>`;}
function memberIdentity(choice){return run.candidate_order[CHOICES.indexOf(choice)];}
function memberName(choice){return MEMBERS[memberIdentity(choice)].name;}
function memberChoiceQuestion(){return `<fieldset class="member-question"><legend>Choose an artist to support.</legend><p class="fine">This selects who you support; it does not cast a vote.</p><div class="member-choices two-artists">${CHOICES.map(choice=>`<label class="member-choice"><input type="radio" name="member_choice" value="${choice}" aria-label="${memberName(choice)}"><span class="member-choice-art">${avatarIcon(choice)}<strong>${memberName(choice)}</strong><span class="artist-group">${MEMBERS[memberIdentity(choice)].group}</span></span></label>`).join('')}</div></fieldset>`;}
function avatarIcon(choice){const id=memberIdentity(choice);return `<img class="member-portrait avatar-icon" data-avatar="${id}" data-avatar-choice="${choice}" src="${MEMBERS[id].photo}" alt="" width="160" height="200">`;}
function mediaCredits(){return '<details class="media-credits"><summary>Media credits</summary><p>Performance excerpts and still frames: SBSKPOP X INKIGAYO (Jennie) and M2 (Yooyeon). These artists do not endorse this fictional activity.</p></details>';}
function isIntroClip(){return ['intro_clip_a','intro_clip_b'].includes(screenId());}
function clipChoice(){return CHOICES[['intro_clip_a','intro_clip_b'].indexOf(screenId())];}
function isFamiliarity(){return screenId()==='familiarity';}
function isInitialSupport(){return screenId()==='initial_support';}
function familiarityQuestion(){return `<div class="support-ratings familiarity-ratings"><p class="support-scale-help" id="familiarity-scale-help">1 = Not at all familiar · 7 = Very familiar</p>${CHOICES.map(choice=>`<fieldset class="support-rating" aria-describedby="familiarity-scale-help"><legend>${memberName(choice)}<span class="familiarity-group">${MEMBERS[memberIdentity(choice)].group}</span></legend><div class="scale scale-7">${Array.from({length:7},(_,i)=>`<label class="choice"><input type="radio" name="prior_familiarity_${memberIdentity(choice)}" value="${i+1}">${i+1}</label>`).join('')}</div></fieldset>`).join('')}</div>`;}
function initialSupportQuestion(){return `<div class="support-ratings"><p class="support-scale-help" id="support-scale-help">1 = Very little · 7 = Very strongly</p>${CHOICES.map(choice=>`<fieldset class="support-rating" aria-describedby="support-scale-help"><legend><span class="support-identity">${avatarIcon(choice)}<span>${memberName(choice)}</span></span></legend><div class="scale scale-7">${Array.from({length:7},(_,i)=>`<label class="choice"><input type="radio" name="initial_support_${memberIdentity(choice)}" value="${i+1}">${i+1}</label>`).join('')}</div></fieldset>`).join('')}</div>`;}
function clipRecord(create=false){
 if(!run||!isIntroClip())return null;
 const identity=memberIdentity(clipChoice()),video=INTRO_VIDEOS[identity];
 if(create){
  if(!run.media_exposure)run.media_exposure={verification:'self_report_with_browser_media_events_not_attention_verification',hosting:'same_origin_mp4',order:[...run.candidate_order],clips:{}};
  if(!run.media_exposure.clips[identity])run.media_exposure.clips[identity]={member:identity,video_id:video.id,local_file:video.file,start_seconds:video.start,end_seconds:video.end,player_start_seconds:0,player_end_seconds:15,loaded_at:null,started_at:null,ended_at:null,max_playback_position_seconds:0,error_at:null,error_code:null,viewing_report:null};
 }
 return run.media_exposure?.clips[identity]??null;
}
function introClip(){
 const choice=clipChoice(),name=memberName(choice),video=INTRO_VIDEOS[memberIdentity(choice)];
 return `<div class="eyebrow">Clip ${CHOICES.indexOf(choice)+1} of 2</div><h1>Watch ${name}</h1><p>Watch this 15-second excerpt from “${video.title}.”</p><div id="introPlayer" class="intro-player"><button type="button" class="primary" id="loadIntroVideo">Play ${name}’s clip</button></div><p class="media-source">${video.credit}.</p><fieldset class="question"><legend>Video playback</legend><div class="pilot-options"><label class="pilot-option"><input type="radio" name="clip_viewing" value="watched"><span>I watched the 15-second clip.</span></label><label class="pilot-option"><input type="radio" name="clip_viewing" value="unavailable"><span>The video would not play.</span></label></div></fieldset>${nextButton()}`;
}
function loadIntroVideo(){
 const record=clipRecord(true);if(!record)return;
 record.loaded_at=new Date().toISOString();
 document.getElementById('introPlayer').innerHTML=`<video id="introVideo" aria-label="${MEMBERS[record.member].name} — 15-second performance excerpt" controls playsinline autoplay preload="auto" width="1280" height="800"><source src="${record.local_file}" type="video/mp4">Your browser could not play this video.</video>`;
 const player=document.getElementById('introVideo');
 player.onplay=()=>{if(!record.started_at)record.started_at=new Date().toISOString();};
 player.ontimeupdate=()=>{if(Number.isFinite(player.currentTime))record.max_playback_position_seconds=Math.max(record.max_playback_position_seconds,Math.min(15,player.currentTime));};
 player.onended=()=>{record.ended_at=new Date().toISOString();};
 player.onerror=()=>{record.error_at=new Date().toISOString();record.error_code=player.error?.code??null;};
}
function candidatePanel(choice,winner=null){
 const chosen=winner===choice,status=winner===null?'pending':chosen?'selected':'not-selected';
 return `<div class="purpose-candidate ${winner?'result-candidate':''} ${chosen?'candidate-winner':''}" data-choice="${choice}" data-status="${status}">${avatarIcon(choice)}<h3>${memberName(choice)}${memberRoleBadge(choice)}</h3>${winner?`<span class="candidate-status">${chosen?'Winner':'Did not win'}</span>`:''}</div>`;
}
function performanceStoryboard(winner=null){
 const lead=winner?memberName(winner):'Artist not selected';
 const stage='<svg class="story-shot" viewBox="0 0 88 82" aria-hidden="true"><path d="M10 12h68v55H10zM10 22h68M22 12l-6 10m23-10-6 10m23-10-6 10m23-10-6 10M21 58h46M27 50h34M33 42h22"/><path d="m39 29 13 7-13 7z"/></svg>';
 const end='<svg class="story-shot" viewBox="0 0 88 82" aria-hidden="true"><path d="M10 12h68v55H10zM18 57h52M24 49h40M30 41h28M24 17l8 17m32-17-8 17M38 17l2 12m10-12-2 12"/><path d="M15 70h58"/></svg>';
 return `<div class="video-storyboard" data-storyboard-choice="${winner??'unknown'}"><div class="storyboard-title"><span class="storyboard-kicker">Performance video</span><strong>The video plan</strong></div><div class="storyboard-frames"><div class="storyboard-shot"><span class="shot-label">01 · Opening</span>${stage}</div><div class="storyboard-lead ${winner?'is-decided':''}"><span class="shot-label">02 · Featured artist</span><div class="lead-slot">${winner?avatarIcon(winner):'<span class="lead-unknown" aria-hidden="true">?</span>'}</div><strong>${lead}</strong></div><div class="storyboard-shot"><span class="shot-label">03 · Finale</span>${end}</div></div><p class="storyboard-caption">${winner?'The winning artist is featured.':'Fans choose the featured artist.'}</p></div>`;
}
function pollPurposeGraphic(){return `<figure class="experiment-visual poll-purpose" aria-label="${memberName(chosenChoice())} is your chosen artist. The artist with the most votes is featured in the next release."><figcaption>What your votes help decide</figcaption><div class="poll-purpose-flow"><div class="purpose-candidates two-artists">${CHOICES.map(choice=>candidatePanel(choice)).join('')}</div><div class="purpose-arrow"><span>Most votes</span><svg viewBox="0 0 64 30" aria-hidden="true"><path d="M2 15h58M49 5l11 10-11 10"/></svg></div>${performanceStoryboard()}</div></figure>`;}
function voteIllustration(){
 const rights=run.initial_voting_rights,cast=run.scenario_voted?rights:0,remaining=available(),used=run.rights==='single'?cast:0;
 const rule=run.scenario_voted?(run.rights==='single'?'Used rights are consumed.':'Your rights can be used again in Poll 2.'):'Your voting rights remain available.';
 const frames=Math.min(cast,10),interval=frames?VOTE_ANIMATION_MS/frames:0,flight=Math.min(450,interval);
 const moving=Array.from({length:frames},(_,i)=>`<span class="cast-moving-token" style="--vote-delay:${interval*(i+1)-flight}ms;--vote-flight:${flight}ms"></span>`).join('');
 return `<figure class="experiment-visual cast-visual" data-illustration="assigned-vote" data-cast="${cast}" aria-label="You cast ${cast} votes for your chosen artist, ${memberName(chosenChoice())}, and have ${remaining} rights for Poll 2."><figcaption>Your Poll 1 participation</figcaption><div class="cast-flow" aria-hidden="true"><div class="cast-party cast-wallet" data-before-rights="${rights}"><h3>Your voting rights</h3><div class="cast-token-row" data-vote-wallet>${votePictures(rights-used,used)}</div><strong><span data-wallet-counter>${rights-used}</span> available rights</strong></div><div class="cast-route ${run.scenario_voted?'cast-active':'cast-idle'}"><span class="cast-route-label"><span data-cast-counter>${cast}</span> votes cast</span><div class="cast-track">${run.scenario_voted?'<svg viewBox="0 0 100 30"><path d="M2 15h90M79 5l13 10-13 10"/></svg>'+moving:'<svg viewBox="0 0 100 30"><path d="M5 15h90" stroke-dasharray="5 6"/></svg>'}</div></div><div class="cast-party cast-recipient"><h3>${memberRoleBadge(chosenChoice())}</h3>${avatarIcon(chosenChoice())}<strong><span class="cast-vote-count" data-cast-counter>${cast}</span> votes from you</strong></div></div><div class="cast-balance rights-balance" data-available="${remaining}" aria-hidden="true"><div><span>Voting rights for Poll 2</span><strong data-balance-counter>${remaining}</strong></div></div><p class="cast-rule">${rule}</p></figure>`;
}
function stopVoteAnimation(){if(voteAnimationTimer!==null){clearTimeout(voteAnimationTimer);voteAnimationTimer=null;}}
function animateVoteIllustration(){
 const root=app.querySelector('[data-illustration="assigned-vote"]');
 if(!root||!run.scenario_voted||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const initial=run.initial_voting_rights,total=Number(root.dataset.cast),single=run.rights==='single';
 const paint=cast=>{const used=single?cast:0;root.querySelector('[data-vote-wallet]').innerHTML=votePictures(initial-used,used);root.querySelector('[data-wallet-counter]').textContent=initial-used;root.querySelectorAll('[data-cast-counter]').forEach(node=>node.textContent=cast);root.querySelector('[data-balance-counter]').textContent=initial-used;root.dataset.shownCast=String(cast);};
 let cast=0;paint(cast);const increment=Math.max(1,Math.ceil(total/10)),frames=Math.ceil(total/increment);
 const tick=()=>{if(!root.isConnected){voteAnimationTimer=null;return;}cast=Math.min(total,cast+increment);paint(cast);if(cast<total)voteAnimationTimer=setTimeout(tick,VOTE_ANIMATION_MS/frames);else voteAnimationTimer=null;};
 voteAnimationTimer=setTimeout(tick,VOTE_ANIMATION_MS/frames);
}
function pollResult(outcome=run.assigned_outcome){
 const winner=winningChoice(outcome);
 return `<figure class="experiment-visual poll-visual" data-result="${outcome}" data-winner="${winner}"><figcaption>Poll 1 · result</figcaption><div class="poll-result-layout"><div class="purpose-candidates two-artists">${CHOICES.map(choice=>candidatePanel(choice,winner)).join('')}</div>${performanceStoryboard(winner)}</div><p class="poll-summary"><b>${memberName(winner)} won.</b> The winner will be featured in the new song and performance video.${outcome==='loss'?` Your chosen artist, ${memberName(chosenChoice())}, did not win.`:''}</p></figure>`;
}
function budgetUnits(value){return Array.from({length:20},(_,i)=>`<span class="budget-unit ${value===null?'unanswered':i<value?'spent':'retained'}" aria-hidden="true"></span>`).join('');}
function allocationVisual(){return `<figure class="experiment-visual allocation-visual"><figcaption>Your $1.00 budget</figcaption><div class="budget-rail" id="budgetRail" role="img" aria-label="Choose how many voting rights to buy to see the spending.">${budgetUnits(null)}</div><p class="visual-key">Each box = $0.05 · Hatched = spend · Empty = keep.</p><div class="allocation-totals" aria-live="polite"><div><strong id="cost">—</strong><span>You spend</span></div><div><strong id="retain">—</strong><span>You keep</span></div></div><div class="token-equation" aria-live="polite"><div><strong>${available()}</strong><span>Rights you have</span></div><b aria-hidden="true">+</b><div><strong id="newRights">—</strong><span>New rights</span></div><b aria-hidden="true">=</b><div><strong id="total">—</strong><span>Rights for Poll 2</span></div></div></figure>`;}
function inventory(after=false){const used=after&&run.rights==='single'&&run.scenario_voted?run.initial_voting_rights:0;return `<figure class="experiment-visual wallet-visual"><figcaption>${run.rights==='single'?'Single-use':'Reusable'} voting rights</figcaption>${holdingState('Your voting rights',after?available():run.initial_voting_rights,used)}</figure>`;}
function renderStep(){
 view='study';showResearchLinks(false);const screen=screenId(),labels=participantSteps(),progress=responseProgress();let content='';
 if(!REVIEW_MODE)document.getElementById('leaveActivity').hidden=screen==='finish';
 if(isFamiliarity()){content=`<div class="eyebrow">Before the clips</div><h1>Before today, how familiar were you with each artist?</h1><p>You will watch two short artist clips, then choose an artist to support. The voting activity is fictional and is not affiliated with the artists.</p>${familiarityQuestion()}${nextButton()}`;}

 if(isIntroClip())content=introClip();
 if(isInitialSupport()){content=`<div class="eyebrow">Your support</div><h1>How strongly do you support each artist?</h1>${initialSupportQuestion()}${nextButton()}`;}

 if(screen==='intro')content=`<div class="eyebrow">Before you start</div><h1>Your vote helps decide who appears in the next K-pop release.</h1><p>The artist with the most votes will be featured in the upcoming song and its performance video.</p>${memberChoiceQuestion()}${mediaCredits()}${nextButton()}`;
 if(screen==='video')content=`<div class="eyebrow">The upcoming video</div><h1>The new performance video</h1><p>Imagine a fan platform planning a new song and performance video. <b>Fans will choose its featured artist.</b></p>${performanceStoryboard()}${nextButton()}`;
 if(screen==='candidates')content=`<div class="eyebrow">Poll 1</div><h1>Who will be featured?</h1><p><b>The artist with the most votes will be featured.</b></p><div class="purpose-candidates standalone-candidates two-artists">${CHOICES.map(choice=>candidatePanel(choice)).join('')}</div>${nextButton()}`;
 if(screen==='holdings')content=`<div class="eyebrow">Your fan platform</div><h1>Your voting rights</h1><p>This is your first poll on this fan platform. <b>Each right lets you cast one vote in a poll.</b></p>${firstPurchaseSummary()}${inventory()}<p class="fine">Fan discussions are free to join, regardless of how many voting rights you hold.</p>${nextButton()}`;
 if(screen==='campaign')content=`<div class="eyebrow">The campaign</div><h1>Two polls, one week apart.</h1><div class="campaign-cards"><div><small>Poll 1</small><h3>The first video</h3><p>Choose its featured artist.</p></div><div class="campaign-gap" aria-hidden="true">One week later →</div><div><small>Poll 2</small><h3>Another video</h3><p>Choose its featured artist.</p></div></div><p>The same two artists compete again. <b>Any of them can win Poll 2, including Poll 1’s winner.</b> The voting rule and price per right stay the same.</p><p>All rights expire after Poll 2, when this campaign ends.</p>${nextButton()}`;
 if(screen==='rule')content=`<div class="eyebrow">Your voting rule</div><h1>${run.rights==='single'?'Single-use voting rights':'Reusable voting rights'}</h1><p>${run.rights==='single'?'<b>Each right can be used once.</b> Casting a vote uses up one right. Unused rights carry over to Poll 2.':'<b>Each right gives one vote in each of the two polls.</b> Voting in Poll 1 leaves your rights available for Poll 2.'}</p><p>You can use each right at most once per poll and use several rights for the same choice.</p>${votingDiagram(10,6,true)}${nextButton()}`;
 if(screen==='rule_check')content=`<div class="eyebrow">Your voting rule</div><h1>A quick check</h1><fieldset class="question"><legend>You have 10 voting rights and cast 6 votes. How many rights can you use in the next poll, before buying more?</legend><div class="scale">${[0,4,6,10].map(n=>`<label class="choice"><input name="comprehension" type="radio" value="${n}">${n}</label>`).join('')}</div></fieldset>${nextButton()}`;
 if(screen==='other_fans')content=`<div class="eyebrow">Poll 1</div><h1>Other fans also vote.</h1><p>The same <b>${SCENARIO.other_fans} other fans</b> can vote in both polls. Together, they have <b>${SCENARIO.other_rights_per_poll.toLocaleString('en-US')} rights available per poll</b>.</p><p>Their choices are unknown.</p>${nextButton()}`;
 if(screen==='expected')content=`<div class="eyebrow">Before Poll 1</div><h1>What do you expect?</h1>${scale('expected_influence','How much influence do you expect your voting rights to give you in this poll?',7,'None','A great deal')}${nextButton()}`;
 if(screen==='vote')content=`<div class="eyebrow">Poll 1 · voting</div><h1>${run.scenario_voted?'You voted.':'You did not vote.'}</h1><p>${run.scenario_voted?`You used all ${run.initial_voting_rights} voting rights to vote for your chosen artist, ${memberName(chosenChoice())}.`:'You cast no votes.'} You followed the poll updates until it closed.</p>${voteIllustration()}${nextButton()}`;
 if(screen==='result')content=`<div class="eyebrow">Poll 1 · result</div><h1>The winning choice</h1>${pollResult()}${nextButton()}`;
 const resultReminder=run.member_choice?`<p class="question-context">Your chosen artist ${run.assigned_outcome==='win'?'won':'lost'} Poll 1.</p>`:'';
 if(screen==='influence')content=`<div class="eyebrow">After Poll 1</div><h1>Your influence</h1>${resultReminder}${scale('perceived_influence','How much influence would you feel you had over the result?',7,'None','A great deal')}${nextButton()}`;
 if(screen==='disconfirmation')content=`<div class="eyebrow">After Poll 1</div><h1>Compared with your expectation</h1>${resultReminder}${scale('influence_disconfirmation','Compared with what you expected, how much influence would you feel you had?',7,'Much less','Much more','As expected')}${nextButton()}`;
 if(screen==='disappointment')content=`<div class="eyebrow">After Poll 1</div><h1>Your reaction</h1>${resultReminder}${scale('disappointment','How disappointed would you feel?',7,'Not at all','Very disappointed')}${nextButton()}`;
 if(screen==='poll2')content=`<div class="eyebrow">Poll 2 · next week</div><h1>Another performance video.</h1><p>Your chosen artist ${run.assigned_outcome==='win'?'won':'lost'} Poll 1. <b>Poll 2 selects the featured artist for another song and performance video.</b> The same two artists compete again; any of them can win.</p>${performanceStoryboard()}${nextButton()}`;
 if(screen==='budget')content=`<div class="eyebrow">Poll 2</div><h1>Your new spending budget</h1>${compactFacts([['Poll 2 spending budget',money(SCENARIO.poll2_budget_cents)],['Price per right','$0.05'],['Rights you have',available()]])}<p><b>This $1.00 is your full budget for this purchase.</b> Money left from your earlier budget is saved separately. Keep any of this $1.00 that you do not spend.</p><p>Each additional right lets you cast one more vote under your voting rule.</p>${nextButton()}`;
 if(screen==='purchase')content=purchase();
 if(screen==='social')content=`<h1>Joining the discussion</h1>${scale('social_participation_intention','How likely are you to join a fan discussion about upcoming K-pop releases on this platform next week?',7,'Very unlikely','Very likely')}${nextButton()}`;
 const pilotItem=PILOT_ITEMS.find(item=>item.id===screen);if(pilotItem)content=pilotScreen(pilotItem);
 if(screen==='finish')content=debrief();
 const recap=step>=SCREENS.findIndex(item=>item.id==='campaign')&&screen!=='finish'&&!pilotItem?contextRecap():'';
 app.innerHTML=`<div class="study-layout">${REVIEW_MODE?`<aside class="sidebar"><div class="aside-label eyebrow">Your scenario</div><ol>${labels.map((l,i)=>{const number=responseProgress(i).current;return `<li class="${i===step?'current':''}" ${i===step?`aria-current="${number?'step':'page'}"`:''}><span class="index">${number?String(number).padStart(2,'0'):''}</span>${l}</li>`;}).join('')}</ol></aside>`:''}<section class="sheet" data-screen="${screen}">${progress.current?`<div class="step-count">Step ${progress.current} of ${progress.total}</div>`:''}<div class="progress" role="progressbar" aria-label="Response progress" aria-valuemin="0" aria-valuemax="${progress.total}" aria-valuenow="${progress.completed}" aria-valuetext="${progress.completed} of ${progress.total} response steps completed"><div style="width:${100*progress.completed/progress.total}%"></div></div>${recap}${content}</section></div>`;
 if(document.getElementById('next'))document.getElementById('next').onclick=advance;
 if(isIntroClip())document.getElementById('loadIntroVideo').onclick=loadIntroVideo;
 if(document.getElementById('rightsQuantity')){document.getElementById('rightsQuantity').onchange=()=>{document.getElementById('error').textContent='';updateLedger();};updateLedger();}
 if(document.getElementById('download'))document.getElementById('download').onclick=download;
 if(document.getElementById('return'))document.getElementById('return').onclick=()=>{const manual=run.entry_route==='researcher_preview';run=null;manual?research():overview();announce();};
 announce();if(screen==='vote')animateVoteIllustration();
}
function purchase(){
 return `<div class="eyebrow">Poll 2</div><h1>Your purchase choice</h1><p class="purchase-reminder">$1.00 budget · $0.05 per right · ${available()} rights already available</p><div class="question"><label for="rightsQuantity"><b>How many additional voting rights would you buy?</b> Choose 0–20.</label><select id="rightsQuantity" class="rights-quantity" aria-label="Additional voting rights" required><option value="" disabled selected>Select the number of rights</option>${Array.from({length:21},(_,n)=>`<option value="${n}">${n} ${n===1?'right':'rights'}</option>`).join('')}</select>${allocationVisual()}</div>${nextButton()}`;
}
function updateLedger(){const el=document.getElementById('rightsQuantity'),n=Number(el.value),valid=el.value!==''&&Number.isInteger(n)&&n>=0&&n<=20;document.getElementById('cost').textContent=valid?money(5*n):'—';document.getElementById('retain').textContent=valid?money(100-5*n):'—';document.getElementById('total').textContent=valid?available()+n:'—';document.getElementById('newRights').textContent=valid?n:'—';const rail=document.getElementById('budgetRail');rail.innerHTML=budgetUnits(valid?n:null);rail.setAttribute('aria-label',valid?`Of your $1.00 budget, ${money(5*n)} is spent and ${money(100-5*n)} is retained.`:'Choose how many voting rights to buy to see the spending.');}
function radio(name){return app.querySelector(`input[name="${name}"]:checked`)?.value;}
function fail(msg){document.getElementById('error').textContent=msg;return false;}
function advance(){
 if(!run||run.completed_at||screenId()==='finish')return false;
 const screen=screenId(),r=run.responses,readRating=name=>{const value=Number(radio(name));return Number.isInteger(value)&&value>=1&&value<=7?value:null;};
 if(isFamiliarity()){
  const ratings=run.candidate_order.map(id=>[id,readRating('prior_familiarity_'+id)]);
  if(ratings.some(([,value])=>value===null))return fail('Please rate both artists.');
  run.baseline={prior_familiarity_by_artist:Object.fromEntries(ratings),initial_support_by_artist:{},timing:'before_scenario_disclosure'};
 }
 if(isIntroClip()){
  const report=radio('clip_viewing'),record=clipRecord();
  if(!['watched','unavailable'].includes(report))return fail('Please select a playback response.');
  if(report==='watched'&&!record?.loaded_at)return fail('Play the clip before continuing, or select that the video would not play.');
  const saved=clipRecord(true);saved.viewing_report=report;saved.reported_at=new Date().toISOString();
 }
 if(isInitialSupport()){
  const ratings=run.candidate_order.map(id=>[id,readRating('initial_support_'+id)]);
  if(ratings.some(([,value])=>value===null))return fail('Please rate all two artists.');
  run.baseline.initial_support_by_artist=Object.fromEntries(ratings);
  run.baseline.initial_support=run.baseline.initial_support_by_artist[memberIdentity(chosenChoice())];
  run.baseline.completed_at=new Date().toISOString();
 }
 if(screen==='intro'){
  const choice=radio('member_choice');
  if(!CHOICES.includes(choice))return fail('Please choose an artist to support.');
  run.member_choice={choice,member_name:memberName(choice),avatar:memberIdentity(choice),display_position:['left','right'][CHOICES.indexOf(choice)],method:'participant_choice_before_scenario_disclosure',selected_at:new Date().toISOString()};
  r.chosen_member=choice;
  run.baseline.prior_familiarity=run.baseline.prior_familiarity_by_artist[memberIdentity(choice)];
  if(run.assigned_outcome==='loss'){
   run.other_winner_choice=otherChoices()[0];
   run.loss_winner_assignment={method:'deterministic_other_artist_given_assigned_loss',probability_given_loss_and_choice:1,choice:run.other_winner_choice,artist:memberIdentity(run.other_winner_choice)};
  }
 }
 if(screen==='rule_check'){const x=radio('comprehension');if(x===undefined)return fail('Please select an answer.');const correct=Number(x)===(run.rights==='single'?4:10);run.comprehension_attempts.push({answer:Number(x),correct});if(!correct)return fail(`Under your rule, ${run.rights==='single'?'used rights are consumed, so 4 remain':'rights can be used again, so all 10 remain'}. Please try again.`);r.comprehension_first_correct=run.comprehension_attempts[0].correct;}
 const ratingFields={expected:'expected_influence',influence:'perceived_influence',disconfirmation:'influence_disconfirmation',disappointment:'disappointment',social:'social_participation_intention'};
 if(ratingFields[screen]){const name=ratingFields[screen],value=readRating(name);if(value===null)return fail('Please choose a response.');r[name]=value;if(screen==='social'){run.secondary_outcome.response=value;run.main_outcomes_completed_at=new Date().toISOString();}}
 if(screen==='purchase'){const el=document.getElementById('rightsQuantity'),n=Number(el.value);if(el.value===''||!Number.isInteger(n)||n<0||n>20)return fail('Please select the number of voting rights, from 0 to 20.');r.voting_rights_poll2=n;r.spending_poll2_cents=n*5;run.primary_outcome.voting_rights=n;run.primary_outcome.spending_cents=n*5;}
 const pilotItem=PILOT_ITEMS.find(item=>item.id===screen);if(pilotItem&&savePilotAnswer(pilotItem)===false)return false;
 run.events.push({step:steps()[step],screen_id:screen,completed_at:new Date().toISOString()});step++;if(screenId()==='finish'){completePilotChecks();run.completed_at=new Date().toISOString();}renderStep();
}
function debrief(){
 if(!REVIEW_MODE)return `<div class="completion-mark" aria-hidden="true">✓</div><div class="eyebrow">Activity complete</div><h1>Thank you.</h1><p>You have completed the activity. You may close this page.</p><div class="completion-note"><p>This activity explores choices in online fan communities. The two performance clips were real. You chose an artist to support; the voting situations and poll results were fictional and assigned for the activity. The artists do not endorse this activity.</p><p>No real purchases or votes took place.</p></div>`;
 return `<div class="eyebrow">Preview complete</div><h1>Thank you.</h1><p>This study examines how voting rules and experiences affect intended purchases and fan participation. People receive different scenarios.</p><p>Download a test record to keep your answers.</p><table class="notetable"><tbody><tr><th>Poll 2 choice</th><th>Voting rights</th><th>Spending</th></tr><tr><td>After the Poll 1 result</td><td>${run.responses.voting_rights_poll2}</td><td>${money(run.responses.spending_poll2_cents)}</td></tr></tbody></table><p>Likelihood of joining a fan discussion: <b>${run.responses.social_participation_intention} / 7</b></p><p>Pilot factual checks: <b>${run.pilot_checks.factual_summary.correct} / ${run.pilot_checks.factual_summary.total}</b>; unsure/not recalled: ${run.pilot_checks.factual_summary.uncertain}. Perceived initial holding size: ${run.pilot_checks.responses.perceived_initial_holding_size} / 7. No exclusion threshold is applied.</p><details><summary>Researcher assignment details</summary><p class="fine">${designs[selected].short}<br>${cellLabel(designs[selected].cells[run.condition_index])}<br>Chosen artist: ${memberName(chosenChoice())} (${run.member_choice.display_position})<br>Result: Choice ${winningChoice()} won<br>Choice A artist: ${MEMBERS[run.avatar_for_a].name}<br>Assignment: ${run.assignment_method}<br>Version: ${VERSION}</p></details><div class="actions"><button class="primary" id="download">Download test record</button><button id="return">${run.entry_route==='researcher_preview'?'Return to researcher preview':'Return to entry'}</button></div>`;
}
function download(){const blob=new Blob([JSON.stringify(run,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`fan-voting-${selected}-preview.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function notes(){
 if(!REVIEW_MODE)return;
 view='notes';showResearchLinks(true);
 app.innerHTML=`<div class="eyebrow">Researcher design notes</div><h1>Expectations, results, and subsequent choices</h1>
 <p class="lead">Version 39 retains 28 short screens but numbers only the 17 screens requiring a response or playback action. The hypothetical-activity acknowledgement appears on the welcome page before random assignment and is not repeated with the familiarity questions. Information-only screens and the closing page are unnumbered; the progress bar advances only after a response screen is completed. Participants rate prior familiarity with both artists on one page before watching either clip. They then watch two 15-second clips, choose an artist, and rate support for both on one page before seeing their holdings or scenario treatment. Each artist has an independent rating. Artist names and other essential labels retain larger black text. Role badges use dark blue for your chosen artist and dark amber for another artist, with the same colors before and after the result. Five pilot checks follow the purchase and discussion outcomes: perceived holding size, initial holdings, rule application, win/loss, and the meaning of the purchase response. Participation recall is omitted; assigned voting/non-voting remains recorded automatically.</p>
 <h2>Study and result assignment</h2>
 <p>The three studies and four primary conditions per study are unchanged. Study 1 crosses single-use/reusable rights with voting/non-voting at five initial rights. Study 2 crosses five/100 purchased rights with voting/non-voting under single-use rights. Study 3 crosses five/100 purchased rights with win/loss; everyone votes under single-use rights.</p>
 <p>The unified entry assigns study with probability 1/3 and condition with probability 1/4. Studies 1 and 2 independently assign win/loss 50/50; Study 3 includes win/loss in its primary conditions. A primary condition has probability 1/12; a realized condition–result combination has probability 1/24 in Studies 1/2 or 1/12 in Study 3. Results are assigned before responses and do not depend on baseline ratings or purchases.</p>
 <p>Jennie and Yooyeon appear in either order with equal probability (1/2). This order determines both clip order and choice-card position, so those presentation effects are not separately identified. Artist choice is a preference, not the Poll 1 ballot and not a randomized treatment. Win/loss is relative to that choice. On an assigned loss, the other artist wins deterministically; there is no additional winner draw. The randomized binary win/loss probabilities and study conditions are unchanged.</p>
 <h2>Scenario and measurement</h2>
 <p>This is a fictional fan-platform song/performance-video release, not a real collaboration, announcement, or artist-sponsored poll. The same two artists compete in two polls one week apart; any can win again. The most-voted artist is featured. No fabricated vote totals or winning probabilities are displayed. The same 100 other fans have 1,000 rights available per poll; their turnout and choices are unknown.</p>
 <p>All participants start with $5.00 and buy rights at $0.05 each. Five rights cost $0.25; 100 cost $5.00. This varies holdings together with past spending, not holdings at constant investment. Single-use rights are consumed when used; unused rights carry over. Reusable rights permit one vote per right in each poll. All rights expire after Poll 2.</p>
 <p>Expectation of influence precedes assigned voting history and the first result. Perceived influence, influence disconfirmation, and disappointment follow. The influence comparison uses 1 = Much less, 4 = As expected, 7 = Much more; losing is not itself coded as negative disconfirmation. These measured process variables do not independently identify causal mediation.</p>
 <p>Poll 2 provides a new $1.00 budget, separate from earlier savings. The primary outcome is intended purchases of 0–20 additional rights at $0.05 each after the first result. The secondary outcome is intention to join a free fan discussion about upcoming K-pop releases. These are stated intentions, not observed purchases, participation, or the field peer-transfer measure.</p>
 <h2>Artist media and baseline ratings</h2>
 <p>Everyone is offered the same two distinct 15-second performance excerpts using native, same-origin MP4 players. Jennie: SOLO, source 00:50–01:05; Yooyeon: Girls Never Die (M2 / M COUNTDOWN, 23 May 2024), 00:24–00:39. The existing clips and still frames are unchanged. Labels identify each artist and group.</p>
 <p>The two artists belong to different groups, so the scenario does not describe them as members of one group. Their songs, dates, framing, lighting, choreography, and prior familiarity can differ. Both familiarity and initial support are measured before treatment disclosure, but these ratings neither guarantee a meaningful attachment nor eliminate artist-selection differences. Keep the same pair and clips across treatment arms, assess preference strength in the pilot, and prespecify analysis of baseline preferences. Do not choose a pair or exclude weak preferences based on favorable treatment results. Record this version separately from the earlier three-artist scenario.</p>
 <p>Basic load/play/end/error events and maximum playback position are recorded separately for each artist, alongside the playback self-report. These are not verified attention or uninterrupted viewing. Playback failures do not redraw assignments, automatically exclude participants, or substitute other media. The playback response can proceed without claiming successful viewing.</p>
 <h2>Pilot checks and review limitations</h2>
 <p>The five final checks cover perceived holding size, initial rights, rule application, win/loss, and the purchase quantity’s meaning. Participation recall remains omitted. Each appears alone with Continue; factual questions allow unsure responses. Valid selections advance without correction, exclusion, reassignment, or a participant score. The researcher record scores four factual checks separately from the main outcomes. These software checks are not a human comprehension pilot.</p>
 <p>This unlisted review prototype stores responses only in page memory; only this coauthor interface can download a local test record. It has no research database, recruitment, payments, or real votes. Unlisted is not private: the website, source, and media are publicly reachable. Confirm stimulus rights, align ethics/protocol/questionnaire materials, finalize power and preregistration, and implement secure server assignment/storage before recruitment. This scenario tests voting-right rules, not blockchain-specific features.</p>
 <div class="actions"><button class="primary" id="overviewReturn">Back to overview →</button></div>`;
 document.getElementById('overviewReturn').onclick=()=>{overview();announce()};announce();
}
function navigate(next){if(view==='study'&&run&&!run.completed_at&&!confirm('Leave this preview? The current test responses will be discarded.'))return;run=null;next==='notes'?notes():next==='research'?research():overview();announce();}
function leaveActivity(){if(!run||run.completed_at)return;if(!confirm('Leave this activity? Your answers on this page will be cleared.'))return;run=null;step=0;view='left';document.getElementById('leaveActivity').hidden=true;app.innerHTML='<section class="sheet welcome-sheet"><div class="eyebrow">Activity ended</div><h1>You have left the activity.</h1><p>Your answers on this page have been cleared. You may close this page.</p></section>';announce();}
if(REVIEW_MODE){document.getElementById('brand').onclick=e=>{e.preventDefault();navigate('overview')};document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>navigate(b.dataset.view));}else document.getElementById('leaveActivity').onclick=leaveActivity;
overview();
