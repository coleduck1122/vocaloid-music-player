import request from "../utils/request";

// 定义类型
export const getLikeMusicListIds = (uid) =>
    request(`/likelist?uid=${uid}`, 'get');

export const getUserPlayList = (uid) =>
    request(`/user/playlist?uid=${uid}`, 'get');

export const getUserPlayListMusic = (id) =>
    request(`/playlist/track/all?id=${id}&limit=10&offset=0`, 'get');

export const getMusicUrl = (id) =>
    request(`/song/url?id=${id}`, 'get');

export const getPlayListDetail = (id) =>
    request(`/playlist/detail?id=${id}`, 'get');

export const getMusicDetail = (ids) =>
    request(`/song/detail?ids=${ids}`, 'get');

export const addOrDelPlaylist = (op, pid, tracks) =>
    request('/playlist/tracks', {op, pid, tracks});

export const likeMusicApi = (id, like = true) =>
    request('/like', {id, like}, 'get');

export const getLyric = (id) =>
    request(`/lyric/new?id=${id}`, 'get');

export const getUserCloud = (limit, offset) =>
  request ('/user/cloud', 'get', {params: {limit, offset}});

export const getArtistAlbum = (id, limit) =>
    request('/artist/album', 'get', {params: {id, limit}});

export const getAlbumContent = (id) =>
    request(`/album?id=${id}`, 'get');

export const getCommentMusic = (id, type, pageNo, pageSize, sortType, cursor) =>
    request('/comment/new', 'get', {params: {id, type, pageNo, pageSize, sortType, cursor}});
