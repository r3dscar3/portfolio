import PageWrapper from "../components/PageWrapper";

export default function Contact() {
  return (
    <PageWrapper heading="Contact" emoji="☎️">
      <div className="space-y-6 px-2">
        <div>
          <p className="pb-2 font-bold">Phone:</p> 
            <a href="tel:+14802214836">(480) 221-4836</a>
        </div>

        <div>
          <p className="pb-2 font-bold">Email:</p> 
            <a href="mailto:nolanthompson34@gmail.com">nolanthompson34@gmail.com</a>
        </div>
      </div>
    </PageWrapper>
  );
}
