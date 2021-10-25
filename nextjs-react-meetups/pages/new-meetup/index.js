// our-domain.com/new-meetup

function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return <NewMeetupForm onMeetupHandler={addMeetupHandler} />;
}

export default NewMeetupPage;
