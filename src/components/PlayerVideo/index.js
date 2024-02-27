import {BiDislike} from 'react-icons/bi'
import ReactPlayer from 'react-player'
import {AiOutlineLike} from 'react-icons/ai'
import {RiBatterySaverLine} from 'react-icons/ri'
import DarkThemeContext from '../../context/DarkThemeContext'
import './index.css'
import {
  VideoDetailsContainer,
  VideoPlayerContainer,
  TitleVideoItem,
  ViewsDateAndLikeDisLikeContainer,
  VideoItemViewAndDate,
  VideoView,
  VideoDateView,
  LikesAndDisLikesContainer,
  ButtonForVideoItem,
  HorizontalLine,
  ProfileAndVideoDetails,
  ProfileImageForVideo,
  VideoArrangeInColumn,
  VideoName,
  VideoSubscriber,
  VideoParaDescription,
} from './styledComponents'

const PlayerVideo = props => {
  const {detailedVideo, like, disLike, clickedOnLike, clickedOnDisLike} = props
  const {
    id,
    publishedAt,
    title,
    viewCount,
    name,
    description,
    profileImageUrl,
    videoUrl,
    subscribeCount,
  } = detailedVideo

  const liked = () => clickedOnLike()
  const disLiked = () => clickedOnDisLike()

  return (
    <DarkThemeContext.Consumer>
      {value => {
        const {isDark, addVideo, savedVideos} = value
        const likeTextColor = like ? '#2563eb' : '#64748b'
        const disLikeTextColor = disLike ? '#2563eb' : '#64748b'
        let isSaved
        const index = savedVideos.findIndex(
          eachItem => eachItem.id === detailedVideo.id,
        )

        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const saveTextColor = isSaved ? '#2563eb' : '#64748b'

        const clickOnSave = () => {
          addVideo(detailedVideo)
        }

        return (
          <VideoDetailsContainer
            videoBgColor={isDark}
            data-testid="videoItemDetails"
          >
            <VideoPlayerContainer>
              <ReactPlayer
                url={videoUrl}
                controls="true"
                className="videoPlayer"
              />
            </VideoPlayerContainer>

            <TitleVideoItem>{title}</TitleVideoItem>
            <ViewsDateAndLikeDisLikeContainer>
              <VideoItemViewAndDate>
                <VideoView videoViewColor={isDark}>{viewCount}</VideoView>
                <VideoDateView viewsColor={isDark}>{publishedAt}</VideoDateView>
              </VideoItemViewAndDate>
              <LikesAndDisLikesContainer>
                <ButtonForVideoItem
                  whenClickedOnLike={likeTextColor}
                  onClick={liked}
                >
                  <AiOutlineLike className="likeIcon" />
                  Like
                </ButtonForVideoItem>
                <ButtonForVideoItem
                  onClick={disLiked}
                  whenClickedOnLike={disLikeTextColor}
                >
                  <BiDislike className="likeIcon" />
                  DisLike
                </ButtonForVideoItem>
                <ButtonForVideoItem
                  whenClickedOnLike={saveTextColor}
                  onClick={clickOnSave}
                >
                  <RiBatterySaverLine className="likeIcon" />
                  Save
                </ButtonForVideoItem>
              </LikesAndDisLikesContainer>
            </ViewsDateAndLikeDisLikeContainer>
            <HorizontalLine />
            <ProfileAndVideoDetails>
              <ProfileImageForVideo src={profileImageUrl} alt="channel logo" />
              <VideoArrangeInColumn>
                <VideoName videoHeading={isDark}>{name}</VideoName>
                <VideoSubscriber videoCount={isDark}>
                  {subscribeCount}
                </VideoSubscriber>
                <VideoParaDescription videoPara={isDark}>
                  {description}
                </VideoParaDescription>
              </VideoArrangeInColumn>
            </ProfileAndVideoDetails>
          </VideoDetailsContainer>
        )
      }}
    </DarkThemeContext.Consumer>
  )
}

export default PlayerVideo
