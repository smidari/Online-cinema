import { connect } from 'react-redux';
import ListFilmsAdmin from './ListFilmsAdmin';
import { addFilmActionCreator,  deleteFilmActionCreator } from '../../../redux/action-creators/action-creator-admin-page';


const mapStateToProps = state => ({
    thdata: state.adminPage.tableFilms.thFilmsData,
    trdata: state.adminPage.tableFilms.trFilms,
    modaltitle: state.adminPage.modalAddFilm.modalData.title,
    nameModalBtn: state.adminPage.modalAddFilm.modalData.nameBtn,
    modalFormData: state.adminPage.modalAddFilm.modalFormData,
});

const mapDispatchToProps = dispatch => ({
    addFilm: newFilm => dispatch(addFilmActionCreator(newFilm)),
    deleteFilm: id => dispatch(deleteFilmActionCreator(id)),
});

const ListFilmsAdminContainer = connect(mapStateToProps, mapDispatchToProps)(ListFilmsAdmin);

export default ListFilmsAdminContainer;