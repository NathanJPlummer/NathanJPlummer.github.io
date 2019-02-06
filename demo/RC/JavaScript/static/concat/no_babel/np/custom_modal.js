// instanciate new modal-0 set options
var modal = new tingle.modal({
    footer: true,
    stickyFooter: true,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    //cssClass: ['custom-class-1', 'custom-class-2'],
    //onOpen: function() {
        //console.log('modal open');
    //},
    //onClose: function() {
        //console.log('modal closed');
    //},
    //beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        //return true; // close the modal
        //return false; // nothing happens
    //},
});

//ROBIN CASEY MODAL
const avbox_Casey = document.getElementById('avbox_Casey');

avbox_Casey.addEventListener('click', function(){
  //Add Name and Education to Footer
  modal.setFooterContent(this.getElementsByTagName('h5')[0].innerHTML);
  //Add Right Hand side button to footer
  modal.addFooterBtn('OK', 'tingle-btn tingle-btn--pull-right', function() {
      modal.close();});
  //Modal Content
  modal.setContent('Dr. Robin Casey is board certified in General \/ Adult Psychiatry, Child and Adolescent Psychiatry, as well as Integrative and Holistic Medicine. She served as Chief Resident during her Child and Adolescent Fellowship training, at the UNC in 2015. Dr. Casey graduated from UNC School of Medicine in 2010 after completing undergraduate degrees in Biochemistry and Chemistry at NC State. She uses a complete approach to patient care, with emphasis on providing psychoeducation to patients and their families on the mind-body connection. She encourages patients to be active advocates and participants in their treatment planning and care, including the use of complementary and natural therapies. She is a strong proponent of optimizing outcomes through the concurrent use of therapy and mindfulness training in addition to pharmacological and other treatments. Dr. Casey enjoys sewing, daydreaming, DIY projects, and hopes to learn metalworking\/sculpting. Initial appointments are face-to-face to evaluate if the patient and Dr. Casey are a good match for ongoing treatment. Dr. Casey is able to provide follow up appointments, when appropriate, via video (telemedicine)');
  //open modal on click
  modal.open();
});

//KRISTINE ASHTON MODAL
const avbox_Ashton = document.getElementById('avbox_Ashton');

avbox_Ashton.addEventListener('click', function(){
  //Add Name and Education to Footer
  modal.setFooterContent(this.getElementsByTagName('h5')[0].innerHTML);
    //Add Right Hand side button to footer
  modal.addFooterBtn('OK', 'tingle-btn tingle-btn--pull-right', function() {
      // here goes some logic
      modal.close();});
      //Modal Content
  modal.setContent('Kristie is a Physician Assistant practicing general psychiatry under the direction and care of her supervising physician, Dr. Robin Casey.  In the state of North Carolina, Physician Assistants are licensed to practice independently while collaborating with a physician.  Kristie has been practicing psychiatry as a PA for the past 3 years but has enjoyed working in the medical field since 2000.  She enjoys working with all types of individuals, though most of her patients are experiencing symptoms of depression, anxiety, bipolar disorder and ADHD.  Kristie has begun utilizing pharmacogenetic testing when indicated. Pharmacogenetic testing is a relatively new DNA testing procedure that can be very helpful in guiding medication decision making, especially when a patient has had difficulty with two or more psychiatric medications.');
  modal.open();
});

//DOLAN WILLIAMS MODALITY
const avbox_Williams = document.getElementById('avbox_Williams');

avbox_Williams.addEventListener('click', function(){
  //Add Name and Education to Footer
  modal.setFooterContent(this.getElementsByTagName('h5')[0].innerHTML);
    //Add Right Hand side button to footer
  modal.addFooterBtn('OK', 'tingle-btn tingle-btn--pull-right', function() {
      // here goes some logic
      modal.close();});
      //Modal Content
  modal.setContent('Dolan has been providing mental health services for the past 14 years, seven of which as a Clinical Director for a local mental health agency. With an expertise in cognitive behavioral therapy for adults, he utilizes specific evidenced-based treatments to treat many conditions including depression, general anxiety, panic, agoraphobia, excessive worry, obsessive compulsive disorder, bipolar disorder, and personality disorders as well as more specific conditions such as drug addiction and pathological gambling. He has developed a passion for working with couples and families and is experienced in providing the most current evidenced based therapeutic services for enrichment, improved communication, and conflict resolution. More recently he has been providing treatment for those preparing for weight loss surgery and dealing with chronic pain.');
  modal.open();
});

//BRICE BRADSHAW MODALITY
const avbox_Bradshaw = document.getElementById('avbox_Bradshaw');

avbox_Bradshaw.addEventListener('click', function(){
  //Add Name and Education to Footer
  modal.setFooterContent(this.getElementsByTagName('h5')[0].innerHTML);
    //Add Right Hand side button to footer
  modal.addFooterBtn('OK', 'tingle-btn tingle-btn--pull-right', function() {
      // here goes some logic
      modal.close();});
      //Modal Content
  modal.setContent('In the past ten years, Brice has had the opportunity to work with children, adolescents, adults and the members of the geriatric population in a variety of mental health settings. Before joining Dr. Casey\'s team, Brice worked at the NC State University Counseling Center helping students through individual, couples, and group counseling settings to overcome barriers that stood between them and their full potential. Brice enjoys working with diverse populations and he seeks to earn trust in the therapeutic relationship. Helping clients work through life’s challenges is an honor and a privilege. Brice practices from the perspective that all humans embody the desire to become their best selves, recognizing that obstacles get in the way sometimes. Helping clients to understand these obstacles, where they originated, and how to overcome them is a key area of focus.\n\nIf Brice is your current provider and you need to contact him directly, please call 844-345- 2256 ext. 704. Brice is currently in the Chapel HIll - Chatham North office on Monday, Wednesday, and Friday and sees clients in North Raleigh on Tuesdays and Thursdays.');
  modal.open();
});

//NICHOLAS FLICKINGER MODALITY
const avbox_Flickinger = document.getElementById('avbox_Flickinger');

avbox_Flickinger.addEventListener('click', function(){
  //Add Name and Education to Footer
  modal.setFooterContent(this.getElementsByTagName('h5')[0].innerHTML);
    //Add Right Hand side button to footer
  modal.addFooterBtn('OK', 'tingle-btn tingle-btn--pull-right', function() {
      // here goes some logic
      modal.close();});
      //Modal Content
  modal.setContent('Nick is a Licensed Clinical Social Worker.  He has experience working with adolescents, adults of all ages, couples, and families.  \n\nHe describes his philosophy here: \"Through the course of our lives we all face challenges that leave us feeling stuck or hopeless. I have focused my practice on helping patients through complex life transitions, relationship issues, grief and loss, familial conflict, self-esteem struggles, questioning of their sexual orientation, gender identity, addiction, anxiety and depression. I work at creating a space where safety and acceptance can be the foundation for making the changes you desire in you life and in your relationships. I look forward to partnering with you to help you reach reach your mental health, wellness, and life aspirations.\"\n\nIf Nick is your current provider and you need to contact him directly, please call 844-345- 2256 ext. 706.  Nick is currently in the Chapel HIll - Chatham North office on Monday, Wednesday, and Friday and sees clients in North Raleigh on Tuesdays and Thursdays.');
  modal.open();
});

//JULIANNE EVANS MODALITY
const avbox_Evans = document.getElementById('avbox_Evans');

avbox_Evans.addEventListener('click', function(){
  //Add Name and Education to Footer
  modal.setFooterContent(this.getElementsByTagName('h5')[0].innerHTML);
    //Add Right Hand side button to footer
  modal.addFooterBtn('OK', 'tingle-btn tingle-btn--pull-right', function() {
      // here goes some logic
      modal.close();});
      //Modal Content
  modal.setContent('Julianne Evans is a Licensed Professional Counselor and has experience working with adolescents and adults of all ages. Julianne has over five years of experience working within the mental health and substance abuse field. Julianne is also a certified clinical trauma professional and has a desire to work with those who have experienced a variety of traumas throughout their lives. Julianne’s therapeutic approach to counseling includes providing a trustworthy, non-judgmental and warm setting in order to collaborate and empower clients to overcome their obstacles.');
  modal.open();
});
