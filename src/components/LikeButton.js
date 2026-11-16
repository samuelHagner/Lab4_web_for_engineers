import { Component } from "react";

class LikeButton extends Component
{
      constructor(props)
      {
            super(props);
            this.state = { liked: false };
            this.handleClick = this.handleClick.bind(this);
      }

      handleClick()
      {
            let liked;

            if (this.state.liked)
            {
                  liked = false;
            }
            else
            {
                  liked = true;
            }

            this.setState({ liked: liked });
      }

      render()
      {
            let label;

            if (this.state.liked)
            {
                  label = "Tack för att du gillat ";
            }
            else
            {
                  label = "Gilla";
            }

            return (
                  <button className="likeBtn" type="button" onClick={this.handleClick}>
                        {label} {this.props.project}
                  </button>
            );
      }
}

export default LikeButton;
