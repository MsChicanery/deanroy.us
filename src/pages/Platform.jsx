import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Platform = () => {
  const platformItems = [
    {
      title: "Taxes.",
      description: "In Vermont, we have the 4th highest tax's, yet the 33rd highest wages. We need to re-manage our government in order to streamline and reduce costs for the average Vermonter. I would do this by lowering taxes for families and small businesses, while also increasing taxes for short-term rentals and large companies."
    },
    {
      title: "School Districts",
      description: "As the Governor of Vermont, I would unify the school district system from over 100 schools into just 5, as well as implementing modern systems into each school. My reforms would save an estimated $100 million across the education system."
    },
    {
      title: "Social Equity and Freedom",
      description: "I stand for LGBTQ+ rights and reproductive freedoms. I also stand for rural traditions such as hunting, farming, and fishing. I'll work to protect Copley's birthing center, improve laws for fishing and hunting, and work torwards better social equity for all."
    },
    {
      title: "Canada",
      description: "Canada and Vermont share a deep historic bond, stretching back to the 1700s, when Vermont nearly became a part of Canada. As Governor of Vermont, I'll make sure Vermont remains a welcoming and reliabale partner to our allies in Canada."
    },
    {
      title: "Housing Reform",
      description: "A major part of the affordability crisis in Vermont is housing. On average, we spend about 30-40% of our income on housing. As Governor, Dean Roy would reduce the crisis by putting a 5% tax on short-term rentals and modernizing regulations to fit the modern state of vermont."
    },
    {
      title: "No EV Mandate",
      description: "While helping the environment is important, we need to make sure we are not overstepping in peoples personal freedoms. This mandate is only going to harm Vermonters by restricting their right to drive whatever car they want."
    },
    {
      title: "Small Government",
      description: "Vermonters need a small government in order to keep our local way of life. We cannot be restricting Vermonters past how they already are. As governor, I would put no new restrictions of any kind on guns, construction, or farming."
    }
  ];

  return (
    <div className="container">
      <Navigation />
      
      {/* Platform Header */}
      <section className="platform-section">
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <h1 className="platform-title">The Platform</h1>
          <p className="platform-subtitle">
            Vermont is too expensive. Dean Roy will lower the cost
          </p>
        </div>
        
        {/* Platform Items */}
        <div className="platform-list">
          {platformItems.map((item, index) => (
            <div key={index} className="platform-item">
              <h3 className="platform-item-title">{item.title}</h3>
              <p className="platform-item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Platform;
