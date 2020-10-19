const CONFIG = {
    DUMMY_IMAGE_CHART: '../../assets/dummy_chart.png',
    SHORTCUT_LASTEST_DATA: (kolam) => kolam.dataHarian[Object.keys(kolam.dataHarian)[Object.keys(kolam.dataHarian).length - 1]],
    SHORTCUT_SECOND_LASTEST_DATA: (kolam) => kolam.dataHarian[Object.keys(kolam.dataHarian)[Object.keys(kolam.dataHarian).length - 2]],
};

export default CONFIG;
