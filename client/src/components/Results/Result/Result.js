import React from 'react';
import './Result.css';

export default function Result(props) {
    
    console.log(`result prop = ${JSON.stringify(props)}`);
    
    const truncateContent = (content) => {
        const words = content.split(' ');
        return words.length > 100 ? words.slice(0, 20).join(' ') + '...' : content;
    };

    const handleClick = () => {
        // Assuming SearchId, ClickedDocId, and Rank are available in props
        const searchId = props.searchId;  // You need to ensure this is passed from parent
        const clickedDocId = props.document.id;
        const rank = props.rank;  // Ensure rank is passed from the parent component

        if (window.appInsights) {
            window.appInsights.trackEvent("Click", {
                SearchServiceName: "aisearch-c2u66zp7iicfc",
                SearchId: searchId,
                ClickedDocId: clickedDocId,
                Rank: rank
            });
        }
    };

    return (
        <ul className="result-list">
            <li className="result-item">
                <a href={`/details/${props.document.id}`} className="result-link" onClick={handleClick}>
                    <h3 className="result-title">{props.document.title}</h3>
                    <div className="result-summary">                       
                        <p className="result-content">{truncateContent(props.document.content)}</p>
                    </div>
                </a>
            </li>
        </ul>
    );
}
